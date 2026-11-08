import { courseById } from './courses';

const base = '/images/courses/editorial';

/** Shared language-neutral artwork keeps catalogue and detail pages recognizable. */
export function courseCover(id: string): string | undefined {
	return courseById.has(id) ? `${base}/${id}.webp` : undefined;
}

const bundleCovers: Record<string, string> = {
	'full-path': '/images/photos/program-1-editorial.webp',
	'fast-track': `${base}/tef-canada-intensive.webp`,
	diploma: `${base}/delf-b2.webp`,
	beginner: `${base}/a1-1.webp`,
	intensive: `${base}/a2-1.webp`,
	teens: `${base}/teens.webp`,
	corporate: `${base}/corporate.webp`,
};

const headers: Record<string, string> = {
	courses: 'catalogue-v2',
	catalogue: 'catalogue-v2',
	bundles: 'bundles',
	levels: 'levels',
	'exam-prep': 'exam-prep',
	specialist: 'specialist',
	'one-on-one': 'specialist',
	trial: 'trial',
};

export function courseArtworkFor(key?: string): { src: string; split: boolean } | undefined {
	if (!key) return undefined;
	if (key.startsWith('courses/')) {
		const src = courseCover(key.slice('courses/'.length));
		return src ? { src, split: true } : undefined;
	}
	if (key.startsWith('bundles/')) {
		const src = bundleCovers[key.slice('bundles/'.length)];
		return src ? { src, split: true } : undefined;
	}
	return headers[key] ? { src: `${base}/header-${headers[key]}.webp`, split: false } : undefined;
}
