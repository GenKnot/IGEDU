export const languages = {
	fr: 'Français',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';
export const langList = Object.keys(languages) as Lang[];
