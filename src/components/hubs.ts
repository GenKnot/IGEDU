import type { CourseCat } from '../data/courses';

// Hub pages: a short lead, then course cards, then the Markdown body as "in detail".
// Which cards each hub shows:
export const hubs: Record<string, { cats?: CourseCat[]; limit?: number; pages?: 'bundles' | 'exams' }> = {
	courses: { cats: ['exam', 'levels', 'skills', 'audience', 'custom'], limit: 3 },
	levels: { cats: ['levels'] },
	'exam-prep': { cats: ['exam'] },
	specialist: { cats: ['skills', 'audience', 'custom'] },
	bundles: { pages: 'bundles' },
	exams: { pages: 'exams' },
};
export const hubKeys = Object.keys(hubs);
