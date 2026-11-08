import data from './courses.json';
import type { Lang } from '../i18n/langs';

// Course catalogue data. Edit courses.json to add a course: it gets a detail
// page (/cours/<slug> and /en/courses/<slug>) and a catalogue card automatically.
export type CourseCat = 'exam' | 'levels' | 'skills' | 'audience' | 'custom';

export interface LText {
	fr: string;
	en: string;
}
export interface LList {
	fr: string[];
	en: string[];
}
export interface Course {
	id: string;
	cat: CourseCat;
	hours: number | null;
	priceCad: number | null;
	priceNote?: LText;
	duration?: LText;
	goal?: LText;
	badge?: LText;
	title: LText;
	summary: LText;
	forWho: LList;
	learn: LList;
	format: LText;
	slug: LText;
}

export const categories = data.categories as Record<CourseCat, LText>;
export const categoryOrder: CourseCat[] = ['exam', 'levels', 'skills', 'audience', 'custom'];
export const courses = data.courses as Course[];
export const courseById = new Map(courses.map((c) => [c.id, c]));

export function coursesByCat(cat: CourseCat): Course[] {
	return courses.filter((c) => c.cat === cat);
}

/** "1 000 $" / "$1,000" from the numeric price, or the price note, or "on request". */
export function priceLabel(c: Course, lang: Lang, onRequest: string): string {
	if (c.priceNote?.[lang]) return c.priceNote[lang];
	if (c.priceCad != null) {
		return lang === 'fr' ? `${c.priceCad.toLocaleString('fr-CA')} $` : `$${c.priceCad.toLocaleString('en-CA')}`;
	}
	return onRequest;
}

// Route entries for every course detail page, merged into the router in routes.ts.
export const courseRoutes: Record<string, { fr: string; en: string }> = Object.fromEntries(
	courses.map((c) => [`courses/${c.id}`, { fr: `cours/${c.slug.fr}`, en: `courses/${c.slug.en}` }]),
);

export function isCourseKey(key: string): boolean {
	return key.startsWith('courses/') && courseById.has(key.slice('courses/'.length));
}
