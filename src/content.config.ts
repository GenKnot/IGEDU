import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Reader-facing pages, one Markdown file per language: src/content/pages/<lang>/<key>.md
// <key> is a route key from src/i18n/routes.ts.
const pages = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Sample content (teachers, student stories): shows a small "sample" label until set to false.
		sample: z.boolean().optional(),
		// Appends a form after the Markdown body.
		form: z.enum(['contact']).optional(),
		// News articles (pages/<lang>/news/<slug>.md): drive the card list, cover and related list.
		date: z.string().optional(),
		updated: z.string().optional(),
		tag: z.string().optional(),
		cover: z.string().optional(),
		excerpt: z.string().optional(),
		// Bundles (pages/<lang>/bundles/*.md): sticky facts card on the detail page.
		facts: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
		goal: z.string().optional(),
	}),
});

export const collections = { pages };
