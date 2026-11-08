import { ui } from './ui';
import type { UiKey } from './ui';
import { defaultLang } from './langs';
import type { Lang } from './langs';
import { localePath, parsePath, routePath } from './routes';

export { localePath, routePath } from './routes';
export type { RouteKey } from './routes';

export function useTranslations(lang: Lang) {
	return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
	return parsePath(url.pathname)?.lang ?? (url.pathname.startsWith('/en') ? 'en' : defaultLang);
}

/** Same page in another language (falls back to that language's home page). */
export function switchLangPath(url: URL, target: Lang): string {
	const parsed = parsePath(url.pathname);
	return parsed ? routePath(target, parsed.key) : localePath(target, '/');
}
