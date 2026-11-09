// Structured data (JSON-LD) for search engines. Every helper returns a plain object;
// Layout.astro serialises the array it receives into <script type="application/ld+json">.
import type { Lang } from '../i18n/langs';
import { site } from '../i18n/site';
import type { Course } from '../data/courses';

const abs = (path: string) => new URL(path, site.url).href;
const ORG_ID = `${site.url}/#organization`;
const LOGO = abs('/icon-512.png');

// Facts that are not in site.ts because only search engines need them.
const GEO = { latitude: 43.6674582, longitude: -79.7327914 };
const HOURS = [
	{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '21:00' },
	{ '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '18:00' },
];
const AREA = ['Brampton', 'Mississauga', 'Toronto', 'Peel Region', 'Greater Toronto Area'].map((name) => ({ '@type': 'City', name }));

const text = {
	fr: {
		desc: 'École de français à Brampton, Ontario : cours en petits groupes (8 personnes maximum), en salle ou en ligne, et préparation au TEF Canada, au TCF Canada et au DELF.',
		home: 'Accueil',
	},
	en: {
		desc: 'French school in Brampton, Ontario: small-group classes (8 students maximum), in person or online, and preparation for TEF Canada, TCF Canada and DELF.',
		home: 'Home',
	},
} satisfies Record<Lang, { desc: string; home: string }>;

/** The school itself: an educational organisation that is also a local business (address, hours, map). */
export function organizationSchema(lang: Lang) {
	return {
		'@context': 'https://schema.org',
		'@type': ['EducationalOrganization', 'LocalBusiness'],
		'@id': ORG_ID,
		name: site.name,
		legalName: site.legalName,
		url: site.url,
		logo: LOGO,
		image: abs('/images/photos/og.jpg'),
		description: text[lang].desc,
		telephone: '+1-888-601-1616',
		email: site.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: '1 Bartley Bull Pkwy',
			addressLocality: 'Brampton',
			addressRegion: 'ON',
			postalCode: 'L6W 3T7',
			addressCountry: 'CA',
		},
		geo: { '@type': 'GeoCoordinates', ...GEO },
		hasMap: site.mapsUrl,
		openingHoursSpecification: HOURS,
		areaServed: AREA,
		foundingDate: '2024',
		knowsLanguage: ['fr', 'en'],
		priceRange: '$$',
	};
}

/** Breadcrumb trail; `items` are in order, the last one is the current page. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.url) })),
	};
}

/** One course from courses.json, as a schema.org Course offered by the school. */
export function courseSchema(c: Course, lang: Lang, url: string) {
	const schema: Record<string, unknown> = {
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: c.title[lang],
		description: c.summary[lang],
		url: abs(url),
		inLanguage: 'fr',
		provider: { '@id': ORG_ID },
		hasCourseInstance: {
			'@type': 'CourseInstance',
			courseMode: ['Onsite', 'Online'],
			location: { '@type': 'Place', name: site.name, address: '1 Bartley Bull Pkwy, Brampton, ON L6W 3T7' },
			...(c.hours ? { courseWorkload: `PT${c.hours}H` } : {}),
		},
	};
	if (c.hours) schema.timeRequired = `PT${c.hours}H`;
	if (c.priceCad != null) {
		schema.offers = { '@type': 'Offer', price: c.priceCad, priceCurrency: 'CAD', availability: 'https://schema.org/InStock', url: abs(url) };
	}
	return schema;
}

/** A news article (blog post) published by the school. */
export function articleSchema(
	d: { title: string; description?: string; date?: string; updated?: string; cover?: string; excerpt?: string },
	lang: Lang,
	url: string,
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: d.title,
		description: d.excerpt ?? d.description,
		image: d.cover ? [abs(d.cover)] : [abs('/images/photos/og.jpg')],
		datePublished: d.date,
		dateModified: d.updated ?? d.date,
		inLanguage: lang === 'fr' ? 'fr-CA' : 'en-CA',
		author: { '@id': ORG_ID },
		publisher: { '@id': ORG_ID },
		mainEntityOfPage: { '@type': 'WebPage', '@id': abs(url) },
	};
}

export interface FaqItem {
	question: string;
	answer: string;
}

/** FAQPage from question/answer pairs. */
export function faqSchema(items: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((it) => ({
			'@type': 'Question',
			name: it.question,
			acceptedAnswer: { '@type': 'Answer', text: it.answer },
		})),
	};
}

/** Pulls "### question" + following paragraph(s) pairs out of a Markdown body, with inline markup stripped. */
export function faqFromMarkdown(body: string): FaqItem[] {
	const strip = (s: string) =>
		s
			.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
			.replace(/\*\*([^*]+)\*\*/g, '$1')
			.replace(/\*([^*]+)\*/g, '$1')
			.replace(/`([^`]+)`/g, '$1')
			.replace(/\s+/g, ' ')
			.trim();
	const items: FaqItem[] = [];
	const lines = body.split('\n');
	for (let i = 0; i < lines.length; i++) {
		const m = /^###\s+(.+)$/.exec(lines[i]);
		if (!m) continue;
		const answer: string[] = [];
		for (let j = i + 1; j < lines.length && !/^#{1,3}\s/.test(lines[j]); j++) answer.push(lines[j]);
		const a = strip(answer.join(' '));
		if (a) items.push({ question: strip(m[1]), answer: a });
	}
	return items;
}

export const homeLabel = (lang: Lang) => text[lang].home;
