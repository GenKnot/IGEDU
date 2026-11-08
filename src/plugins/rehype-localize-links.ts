import { isRouteKey, routePath } from '../i18n/routes';
import type { Lang } from '../i18n/langs';

// Markdown pages link to each other with canonical keys ("/prices", "/news/2026-crs-reform").
// This rewrites them per language: /tarifs (fr), /en/prices (en).
type Node = { type: string; tagName?: string; properties?: Record<string, unknown>; children?: Node[] };

function walk(node: Node, fn: (n: Node) => void) {
	fn(node);
	node.children?.forEach((c) => walk(c, fn));
}

export default function rehypeLocalizeLinks() {
	return (tree: Node, file: { path?: string; history?: string[] }) => {
		const p = (file.path ?? file.history?.[0] ?? '').replace(/\\/g, '/');
		const m = p.match(/\/content\/pages\/(fr|en)\//);
		if (!m) return;
		const lang = m[1] as Lang;
		walk(tree, (n) => {
			if (n.type !== 'element' || n.tagName !== 'a') return;
			const href = n.properties?.href;
			if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return;
			const [pathPart, hash] = href.split('#');
			const key = pathPart.replace(/^\/+|\/+$/g, '');
			if (key === '') {
				n.properties!.href = routePath(lang, 'home') + (hash ? `#${hash}` : '');
			} else if (isRouteKey(key)) {
				n.properties!.href = routePath(lang, key) + (hash ? `#${hash}` : '');
			}
		});
	};
}
