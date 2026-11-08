// Cloudflare Pages Function: POST /api/contact
// Sends the enquiry to the school and an automatic confirmation to the visitor, through Resend (HTTPS API).
//
// Environment variables (Cloudflare Pages > Settings > Variables and secrets):
//   RESEND_API_KEY      required   API key of a Resend account with igedu.ca verified as a sending domain
//   TURNSTILE_SECRET    optional   secret key of the Cloudflare Turnstile widget (enable with PUBLIC_TURNSTILE_SITEKEY at build time)
//   MAIL_FROM           optional   default "Global French Education <no-reply@igedu.ca>"
//   MAIL_TO             optional   default "info@igedu.ca"

interface Env {
	RESEND_API_KEY?: string;
	RESEND_API_URL?: string; // only for local tests; defaults to the real Resend endpoint
	TURNSTILE_SECRET?: string;
	MAIL_FROM?: string;
	MAIL_TO?: string;
}

type Context = { request: Request; env: Env };

const TOPICS = ['placement', 'courses', 'exam', 'corporate', 'other'] as const;
type Lang = 'fr' | 'en';

const reply: Record<Lang, { subject: string; body: (name: string) => string }> = {
	fr: {
		subject: 'Nous avons bien reçu votre message',
		body: (n) => `Bonjour ${n},\n\nMerci de nous avoir écrit. Nous vous répondons dans un délai d’un jour ouvrable.\n\nGlobal French Education\ninfo@igedu.ca · (888) 601-1616`,
	},
	en: {
		subject: 'We have received your message',
		body: (n) => `Hello ${n},\n\nThank you for writing to us. We will reply within one business day.\n\nGlobal French Education\ninfo@igedu.ca · (888) 601-1616`,
	},
};

const json = (data: unknown, status = 200) =>
	new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

async function send(env: Env, payload: Record<string, unknown>) {
	const res = await fetch(env.RESEND_API_URL ?? 'https://api.resend.com/emails', {
		method: 'POST',
		headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
		body: JSON.stringify(payload),
	});
	if (!res.ok) throw new Error(`resend ${res.status}`);
}

export const onRequestPost = async ({ request, env }: Context): Promise<Response> => {
	let input: Record<string, unknown>;
	try {
		input = await request.json();
	} catch {
		return json({ ok: false }, 400);
	}

	// Honeypot: bots fill it, people never see it. Answer "ok" so bots do not retry.
	if (clean(input.company, 100)) return json({ ok: true });

	const name = clean(input.name, 120);
	const email = clean(input.email, 160);
	const phone = clean(input.phone, 40);
	const message = clean(input.message, 4000);
	const topic = TOPICS.find((t) => t === input.topic);
	const lang: Lang = input.lang === 'en' ? 'en' : 'fr';
	if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !topic || input.consent !== true) {
		return json({ ok: false, error: 'invalid' }, 400);
	}

	if (env.TURNSTILE_SECRET) {
		const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			body: new URLSearchParams({
				secret: env.TURNSTILE_SECRET,
				response: clean(input.token, 2048),
				remoteip: request.headers.get('cf-connecting-ip') ?? '',
			}),
		});
		const result = (await check.json()) as { success?: boolean };
		if (!result.success) return json({ ok: false, error: 'captcha' }, 400);
	}

	if (!env.RESEND_API_KEY) return json({ ok: false, error: 'not-configured' }, 500);

	const from = env.MAIL_FROM ?? 'Global French Education <no-reply@igedu.ca>';
	const to = env.MAIL_TO ?? 'info@igedu.ca';

	try {
		await send(env, {
			from,
			to: [to],
			reply_to: email,
			subject: `[Website] ${topic} – ${name}`,
			html: `<p><strong>${esc(name)}</strong> &lt;${esc(email)}&gt; ${phone ? `· ${esc(phone)}` : ''}</p><p>Topic: ${esc(topic)} · Language: ${lang}</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`,
		});
		await send(env, {
			from,
			to: [email],
			reply_to: to,
			subject: reply[lang].subject,
			text: reply[lang].body(name),
		});
	} catch {
		return json({ ok: false, error: 'send-failed' }, 502);
	}
	return json({ ok: true });
};
