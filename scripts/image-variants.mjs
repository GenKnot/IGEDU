// Pre-build: create smaller copies (-480 / -960) of large content images so pages can use srcset.
// Generated files are git-ignored and rebuilt on every build; sources are never modified.
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, basename, extname } from 'node:path';

const ROOTS = ['public/images/news', 'public/images/editorial', 'public/images/photos'];
const WIDTHS = [480, 960];
const walk = (d) => (existsSync(d) ? readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)])) : []);

let made = 0, skipped = 0;
for (const root of ROOTS) {
	for (const file of walk(root)) {
		if (!/\.webp$/i.test(file) || /-(480|960)\.webp$/i.test(file) || /^banner-|^hero\./.test(basename(file))) continue;
		const meta = await sharp(file).metadata();
		for (const w of WIDTHS) {
			const out = join(dirname(file), `${basename(file, extname(file))}-${w}.webp`);
			if (existsSync(out) && statSync(out).mtimeMs >= statSync(file).mtimeMs) { skipped++; continue; }
			if (!meta.width || meta.width <= w) { skipped++; continue; }
			await sharp(file).resize({ width: w }).webp({ quality: 78 }).toFile(out);
			made++;
		}
	}
}
console.log(`[image-variants] created ${made}, up to date ${skipped}`);
