import type { Lang } from './langs';
import { defaultLang } from './langs';
import { courseRoutes } from '../data/courses';

// One entry per content page. The key is also the file name in src/content/pages/<lang>/<key>.md
// and the canonical link target inside Markdown ("/prices"). 
type Slugs = { fr: string; en: string };

export const routes = {
	school: { fr: 'ecole', en: 'school' },
	team: { fr: 'equipe', en: 'team' },
	stories: { fr: 'temoignages', en: 'stories' },
	campus: { fr: 'campus', en: 'campus' },
	contact: { fr: 'contact', en: 'contact' },
	courses: { fr: 'cours', en: 'courses' },
	catalogue: { fr: 'catalogue', en: 'catalogue' },
	bundles: { fr: 'forfaits', en: 'bundles' },
	levels: { fr: 'niveaux', en: 'levels' },
	'exam-prep': { fr: 'preparation-examens', en: 'exam-prep' },
	specialist: { fr: 'cours-specialises', en: 'specialist' },
	'one-on-one': { fr: 'cours-particuliers', en: 'one-on-one' },
	trial: { fr: 'cours-essai', en: 'trial' },
	exams: { fr: 'examens', en: 'exams' },
	'mock-exams': { fr: 'examens-blancs', en: 'mock-exams' },
	'tef-vs-tcf': { fr: 'tef-ou-tcf', en: 'tef-vs-tcf' },
	prices: { fr: 'tarifs', en: 'prices' },
	enrollment: { fr: 'inscription', en: 'enrollment' },
	'learning-path': { fr: 'parcours', en: 'learning-path' },
	faq: { fr: 'faq', en: 'faq' },
	glossary: { fr: 'glossaire', en: 'glossary' },
	resources: { fr: 'ressources', en: 'resources' },
	'why-french': { fr: 'pourquoi-le-francais', en: 'why-french' },
	'city-guide': { fr: 'guide-toronto', en: 'city-guide' },
	careers: { fr: 'recrutement', en: 'careers' },
	news: { fr: 'actualites', en: 'news' },
	'bundles/full-path': { fr: 'forfaits/parcours-complet', en: 'bundles/full-path' },
	'bundles/fast-track': { fr: 'forfaits/voie-rapide', en: 'bundles/fast-track' },
	'bundles/diploma': { fr: 'forfaits/diplome', en: 'bundles/diploma' },
	'bundles/beginner': { fr: 'forfaits/debutants', en: 'bundles/beginner' },
	'bundles/intensive': { fr: 'forfaits/intensif', en: 'bundles/intensive' },
	'bundles/teens': { fr: 'forfaits/adolescents', en: 'bundles/teens' },
	'bundles/corporate': { fr: 'forfaits/entreprises', en: 'bundles/corporate' },
	'exams/tef-canada': { fr: 'examens/tef-canada', en: 'exams/tef-canada' },
	'exams/tcf-canada': { fr: 'examens/tcf-canada', en: 'exams/tcf-canada' },
	'exams/tefaq': { fr: 'examens/tefaq', en: 'exams/tefaq' },
	'exams/tcfq': { fr: 'examens/tcfq', en: 'exams/tcfq' },
	'exams/delf-dalf': { fr: 'examens/delf-dalf', en: 'exams/delf-dalf' },
	accessibility: { fr: 'accessibilite', en: 'accessibility' },
	privacy: { fr: 'confidentialite', en: 'privacy' },
	terms: { fr: 'conditions', en: 'terms' },
	'nclc-converter': { fr: 'convertisseur-nclc', en: 'nclc-converter' },
	'cost-calculator': { fr: 'calculateur-cout', en: 'cost-calculator' },
} as const satisfies Record<string, Slugs>;

export type RouteKey = keyof typeof routes;

// Static page routes plus data-driven course detail routes (src/data/courses.json).
const allRoutes: Record<string, Slugs> = { ...(routes as Record<string, Slugs>), ...courseRoutes };

export function isRouteKey(key: string): key is RouteKey {
	return key in routes;
}

export function slugFor(key: string, lang: Lang): string {
	const r = allRoutes[key];
	if (r) return r[lang];
	// News articles need no route registration: the Markdown file name is the slug.
	if (key.startsWith('news/')) return lang === 'fr' ? `actualites/${key.slice('news/'.length)}` : key;
	throw new Error(`Unknown route key: ${key}`);
}

/** Prefix a path with the language; every public URL ends with a slash ("/", "/tarifs/", "/en/", "/en/prices/"). */
export function localePath(lang: Lang, path: string): string {
	const p = path.endsWith('/') ? path : `${path}/`;
	return lang === defaultLang ? p : `/${lang}${p}`;
}

/** Public path of a content page in a given language, e.g. routePath('fr', 'prices') = "/tarifs/". */
export function routePath(lang: Lang, key: RouteKey | 'home' | (string & {})): string {
	return key === 'home' ? localePath(lang, '/') : localePath(lang, `/${slugFor(key, lang)}`);
}

/** Reverse lookup: "/tarifs" or "/en/prices" -> { lang, key }. */
export function parsePath(pathname: string): { lang: Lang; key: string } | null {
	const parts = pathname.replace(/\/+$/, '').split('/').filter(Boolean);
	let lang: Lang = defaultLang;
	if (parts[0] === 'en') lang = parts.shift() as Lang;
	if (parts.length === 0) return { lang, key: 'home' };
	const slug = parts.join('/');
	for (const key of Object.keys(allRoutes)) {
		if (allRoutes[key][lang] === slug) return { lang, key };
	}
	// News fallback: /actualites/<file> and /en/news/<file> map to the collection id.
	if (lang === 'fr' && slug.startsWith('actualites/')) return { lang, key: `news/${slug.slice('actualites/'.length)}` };
	if (lang === 'en' && slug.startsWith('news/')) return { lang, key: slug };
	return null;
}
