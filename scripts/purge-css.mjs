// Post-build: strip unused CSS from dist and delete font files no stylesheet references.
import { PurgeCSS } from 'purgecss';
import { readdirSync, readFileSync, writeFileSync, rmSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
const cssFiles = ['css/plugins/fontawesome.min.css', 'css/vendor/bootstrap.min.css', 'css/style.css'].map((f) => join(dist, 'assets', f)).filter(existsSync);
const before = cssFiles.reduce((n, f) => n + statSync(f).size, 0);

const results = await new PurgeCSS().purge({
	content: [
		{ raw: walk(dist).filter((f) => f.endsWith('.html')).map((f) => readFileSync(f, 'utf8')).join('\n'), extension: 'html' },
		{ raw: walk('src').filter((f) => /\.(astro|ts)$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('\n'), extension: 'html' },
		join(dist, 'assets/js/site.js'),
	],
	css: cssFiles,
	fontFace: true,
	keyframes: true,
	variables: false,
	safelist: { standard: [/^show$/, /^fixed$/, /^active$/, /^back-hide-header$/, /^mm-/, /^was-validated$/, /^is-/, /^d-none$/, /^gfe-/], greedy: [/^swiper-/] },
});
for (const r of results) writeFileSync(r.file, r.css);
const after = cssFiles.reduce((n, f) => n + statSync(f).size, 0);

// Drop unused CSS files and font files that nothing references any more.
const allCss = walk(join(dist, 'assets')).filter((f) => f.endsWith('.css'));
const refs = allCss.map((f) => readFileSync(f, 'utf8')).join('\n');
let removed = 0;
for (const f of walk(join(dist, 'assets')).filter((f) => /\.(woff2?|ttf|eot|otf)$/.test(f))) {
	const base = f.split('/').pop();
	if (!refs.includes(base)) { rmSync(f); removed++; }
}
console.log(`[purge-css] CSS ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB; removed ${removed} unused font files`);
