// srcset for images that scripts/image-variants.mjs has pre-sized (-480 / -960 copies next to the original).
export function srcsetFor(src: string, originalWidth = 1200): string | undefined {
	if (!/^\/images\/(news|editorial|photos)\/.*\.webp$/.test(src) || /^\/images\/photos\/(banner-|hero\.)/.test(src)) return undefined;
	const base = src.replace(/\.webp$/, '');
	return `${base}-480.webp 480w, ${base}-960.webp 960w, ${src} ${originalWidth}w`;
}
