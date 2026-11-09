// Maps a page key to one of the banner photos in public/images/photos/banner-*.webp
export function bannerFor(key?: string): string {
	if (!key) return 'default';
	if (key.startsWith('bundles/')) return 'courses';
	if (key.startsWith('exams/')) return 'exams';
	if (key.startsWith('courses/')) return 'courses';
	if (['courses', 'catalogue', 'bundles', 'levels', 'exam-prep', 'specialist', 'one-on-one', 'online'].includes(key)) return 'courses';
	if (['exams', 'mock-exams', 'tef-vs-tcf', 'nclc-converter'].includes(key)) return 'exams';
	if (['prices', 'enrollment', 'learning-path', 'faq', 'cost-calculator'].includes(key)) return 'enroll';
	if (['school', 'team', 'stories', 'campus', 'careers', 'resources', 'glossary'].includes(key)) return 'school';
	if (key === 'news' || key.startsWith('news/') || ['why-french', 'city-guide'].includes(key)) return 'news';
	if (['contact', 'trial'].includes(key)) return 'contact';
	return 'default';
}
