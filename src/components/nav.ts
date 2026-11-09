import type { UiKey } from '../i18n/ui';
import type { RouteKey } from '../i18n/routes';

export interface NavItem {
	label: UiKey;
	href?: RouteKey | 'home';
	children?: { label: UiKey; href: RouteKey }[];
}

export const nav: NavItem[] = [
	{ label: 'nav.home', href: 'home' },
	{
		label: 'nav.courses',
		children: [
			{ label: 'nav.c.catalogue', href: 'catalogue' },
			{ label: 'nav.c.bundles', href: 'bundles' },
			{ label: 'nav.c.levels', href: 'levels' },
			{ label: 'nav.c.examprep', href: 'exam-prep' },
			{ label: 'nav.c.specialist', href: 'specialist' },
			{ label: 'nav.c.online', href: 'online' },
			{ label: 'nav.c.trial', href: 'trial' },
		],
	},
	{
		label: 'nav.exams',
		children: [
			{ label: 'nav.e.exams', href: 'exams' },
			{ label: 'nav.e.mock', href: 'mock-exams' },
			{ label: 'nav.e.tefvstcf', href: 'tef-vs-tcf' },
			{ label: 'nav.e.nclc', href: 'nclc-converter' },
		],
	},
	{
		label: 'nav.enroll',
		children: [
			{ label: 'nav.i.prices', href: 'prices' },
			{ label: 'nav.i.cost', href: 'cost-calculator' },
			{ label: 'nav.i.enrollment', href: 'enrollment' },
			{ label: 'nav.i.path', href: 'learning-path' },
			{ label: 'nav.i.faq', href: 'faq' },
		],
	},
	{
		label: 'nav.school',
		children: [
			{ label: 'nav.about', href: 'school' },
			{ label: 'nav.team', href: 'team' },
			{ label: 'nav.stories', href: 'stories' },
			{ label: 'nav.campus', href: 'campus' },
			{ label: 'nav.s.why', href: 'why-french' },
		],
	},
	{ label: 'nav.news', href: 'news' },
	{ label: 'nav.contact', href: 'contact' },
];

// Secondary pages, linked from the footer only.
export const footerMore: { label: UiKey; href: RouteKey }[] = [
	{ label: 'nav.c.oneonone', href: 'one-on-one' },
	{ label: 'nav.s.resources', href: 'resources' },
	{ label: 'nav.s.glossary', href: 'glossary' },
	{ label: 'nav.s.city', href: 'city-guide' },
	{ label: 'nav.s.careers', href: 'careers' },
];
