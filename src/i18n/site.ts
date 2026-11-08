import type { Lang } from './langs';

// Contact details and business facts shown across the site.
// Empty values are hidden.
export const site = {
	url: 'https://igedu.ca',
	name: 'Global French Education',
	legalName: 'Global French Education Inc.',
	email: 'info@igedu.ca',
	emails: {
		general: 'info@igedu.ca',
		careers: 'careers@igedu.ca',
		complaints: 'complaints@igedu.ca',
		privacy: 'privacy@igedu.ca',
		corporate: 'corporate@igedu.ca',
	},
	phone: '(888) 601-1616',
	address: {
		fr: '1 Bartley Bull Pkwy, Brampton, ON L6W 3T7',
		en: '1 Bartley Bull Pkwy, Brampton, ON L6W 3T7',
	} satisfies Record<Lang, string>,
	mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1+Bartley+Bull+Pkwy+Brampton+ON+L6W+3T7',
	// E.164 without "+", used for the click-to-chat link.
	whatsapp: '18886011616',
	// Icons stay hidden until a URL is set.
	social: {
		instagram: '',
		facebook: '',
		youtube: '',
		linkedin: '',
	},
};
