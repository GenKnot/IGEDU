// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeLocalizeLinks from './src/plugins/rehype-localize-links.ts';
import rehypeWrapTables from './src/plugins/rehype-wrap-tables.ts';
import rehypeTimeline from './src/plugins/rehype-timeline.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://igedu.ca',
	trailingSlash: 'always',
	build: { format: 'directory' },
	i18n: {
		locales: ['fr', 'en'],
		defaultLocale: 'fr',
		routing: { prefixDefaultLocale: false },
	},
	markdown: { rehypePlugins: [rehypeLocalizeLinks, rehypeWrapTables, rehypeTimeline] },
	integrations: [
		sitemap({
			i18n: { defaultLocale: 'fr', locales: { fr: 'fr-CA', en: 'en-CA' } },
			// Sample content stays out of the sitemap until it is replaced by real material.
			filter: (page) => !/\/404\/$/.test(page),
		}),
	],
});
