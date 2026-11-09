import { languages, defaultLang } from './langs';
import type { Lang } from './langs';

export { languages, defaultLang };
export type { Lang };

// French is the source of truth; English must provide the same keys.

const fr = {
	'meta.title': 'Global French Education | Cours de français et préparation TEF / TCF à Brampton (région de Toronto)',
	'meta.description':
		'Cours de français en petits groupes (8 personnes maximum) à Brampton, Ontario. Préparation au TEF Canada, au TCF Canada et au DELF.',

	// navigation
	'nav.home': 'Accueil',
	'nav.courses': 'Cours',
	'nav.exams': 'Examens',
	'nav.enroll': 'Inscription',
	'nav.school': 'L’école',
	'nav.about': 'À propos',
	'nav.team': 'Équipe',
	'nav.stories': 'Témoignages',
	'nav.campus': 'Campus',
	'nav.news': 'Actualités',
	'nav.contact': 'Contact',
	'nav.followUs': 'Suivez-nous :',
	'nav.applyNow': 'Réserver un test',
	'nav.sideText':
		'Cours de français en petits groupes à Brampton, pour réussir l’examen et oser parler.',
	'nav.c.overview': 'Vue d’ensemble',
	'nav.c.bundles': 'Parcours combinés',
	'nav.c.levels': 'Cours par niveau',
	'nav.c.examprep': 'Préparation aux examens',
	'nav.c.specialist': 'Cours spécialisés',
	'nav.c.oneonone': 'Cours particuliers',
	'nav.c.catalogue': 'Catalogue complet',
	'nav.c.trial': 'Cours d’essai',
	'nav.c.online': 'Cours en ligne',
	'nav.e.exams': 'Les examens',
	'nav.e.mock': 'Examens blancs',
	'nav.e.tefvstcf': 'TEF ou TCF ?',
	'nav.e.nclc': 'Convertisseur NCLC',
	'nav.i.prices': 'Tarifs',
	'nav.i.cost': 'Calculateur de coût',
	'nav.i.enrollment': 'Comment s’inscrire',
	'nav.i.path': 'Parcours d’apprentissage',
	'nav.i.faq': 'FAQ',
	'nav.s.resources': 'Ressources',
	'nav.s.glossary': 'Glossaire',
	'nav.s.why': 'Pourquoi le français',
	'nav.s.city': 'Guide de Toronto',
	'nav.s.careers': 'Carrières',

	// calls to action
	'cta.subject': 'Réservation d’un test de niveau',
	'cta.visitSubject': 'Demande de visite du campus',

	// hero
	'hero.eyebrow': 'Brampton · Ontario',
	'hero.title': 'Parler français, et le prouver',
	'hero.sub':
		'Cours 100 % en français · 8 personnes maximum par classe · Préparation au TEF / TCF Canada et au DELF',
	'hero.btn1': 'Réserver un test de niveau (gratuit, 40 min)',
	'hero.btn2': 'Voir les cours',

	// stats
	'stats.1.n': '8',
	'stats.1.label': 'personnes maximum par classe',
	'stats.2.n': '12',
	'stats.2.label': 'salles de classe',
	'stats.3.n': '4 000+',
	'stats.3.label': 'heures de cours données',

	// programs
	'programs.title': 'Nos cours',
	'programs.more': 'Tous les cours',
	'programs.btn': 'En savoir plus',
	'programs.1.title': 'Parcours complet Élite',
	'programs.1.desc': 'De zéro au B2, avec préparation intensive au TEF.',
	'programs.1.meta': '330 h · environ 14 mois · De zéro au B2',
	'programs.2.title': 'Préparation TEF / TCF Canada',
	'programs.2.desc': 'Quatre épreuves blanches complètes, notées épreuve par épreuve.',
	'programs.2.meta': '40 h · 1 400 $',
	'programs.3.title': 'Niveaux A1 à B2',
	'programs.3.desc': 'Chaque niveau est divisé en deux demi-niveaux : vous voyez votre progression.',
	'programs.3.meta': '30 à 36 h par demi-niveau · à partir de 1 050 $',
	'programs.4.title': 'Oral et compréhension',
	'programs.4.desc': 'Pour ceux qui comprennent, mais n’arrivent pas encore à parler.',
	'programs.4.meta': '24 h · 840 $',
	'programs.taxNote': 'Prix en dollars canadiens, avant taxes (TVH de 13 % en sus).',

	// why us
	'why.title1': 'Pourquoi',
	'why.title2': 'nous choisir',
	'why.1.title': 'Huit personnes maximum par classe.',
	'why.1.text':
		'Ce n’est pas faute de place : au-delà, plus personne ne prend la parole à chaque cours. Au moins la moitié du cours se passe à parler.',
	'why.2.title': 'Un vrai classement par niveau.',
	'why.2.text':
		'Test d’entrée d’abord, pas de classes formées selon l’ordre d’inscription. Votre niveau dépend d’où vous en êtes aujourd’hui, pas de la formule achetée.',
	'why.3.title': 'Pas de bachotage.',
	'why.3.text':
		'Nous enseignons les types d’épreuves et la compétence langagière qui les sous-tend. Un sujet différent le jour J ne change rien : nous ne donnons pas de sujets à réviser.',
	'why.btn': 'Découvrir l’école',

	// placement test banner
	'test.title': 'Vous ne savez pas par quel niveau commencer ?',
	'test.text':
		'Quarante minutes, gratuit, sans inscription préalable. Vous repartez avec un avis écrit : par quel niveau commencer, en combien de temps, et quand passer l’examen.',
	'test.btn': 'Réserver un test de niveau (gratuit, 40 min)',

	// campus
	'campus.title': 'Une école au cœur de Brampton',
	'campus.text': 'Douze salles de classe · espace d’étude · Wi-Fi gratuit',
	'campus.btn': 'Planifier une visite',
	'campus.bottom': 'Notre campus',

	// news
	'news.title': 'Actualités',
	'news.text': 'Immigration, examens, méthode : ce qu’il faut savoir pour avancer.',
	'news.viewAll': 'Tout voir',

	// contact form
	'form.title': 'Écrivez-nous',
	'form.name': 'Nom',
	'form.email': 'Courriel',
	'form.phone': 'Téléphone (facultatif)',
	'form.topic': 'Je souhaite',
	'form.topic.placement': 'Passer un test de niveau',
	'form.topic.courses': 'Me renseigner sur les cours',
	'form.topic.enroll': 'M’inscrire à un cours',
	'form.topic.exam': 'M’inscrire à un examen',
	'form.topic.corporate': 'Une formation pour mon entreprise',
	'form.topic.other': 'Autre',
	'form.message': 'Message',
	'form.consent':
		'J’accepte que mes informations soient utilisées uniquement pour répondre à ma demande.',
	'form.privacy': 'Politique de confidentialité',
	'form.submit': 'Envoyer',
	'form.sending': 'Envoi…',
	'form.success': 'Bien reçu. Nous vous répondons dans un délai d’un jour ouvrable.',
	'form.error': 'L’envoi a échoué. Écrivez-nous à info@igedu.ca.',

	// dock and labels
	'a11y.skip': 'Aller au contenu',
	'a11y.close': 'Fermer',
	'dock.whatsapp': 'WhatsApp',
	'dock.call': 'Appeler',
	'dock.write': 'Nous écrire',
	'sample.label': 'Contenu d’exemple',
	'hours.label': 'Heures d’ouverture',
	'hours.text': 'Lundi au vendredi 10 h – 21 h · samedi 10 h – 18 h · dimanche fermé',

	// footer
	'footer.about':
		'École de français fondée en 2024 à Brampton. Cours en petits groupes, avec préparation au TEF / TCF Canada.',
	'footer.col1': 'Cours',
	'footer.col1.1': 'Parcours complets',
	'footer.col1.2': 'Préparation aux examens',
	'footer.col1.3': 'Cours par niveau',
	'footer.col1.4': 'Cours spécialisés',
	'footer.col1.5': 'Enfants et adolescents',
	'footer.col2': 'À propos',
	'footer.col2.1': 'L’école',
	'footer.col2.2': 'FAQ',
	'footer.col2.3': 'Campus',
	'footer.col2.4': 'Actualités',
	'footer.col2.5': 'Contact',
	'footer.contact': 'Contact',
	'footer.rights': 'Tous droits réservés',
	'footer.privacy': 'Politique de confidentialité',
	'footer.terms': 'Conditions et remboursement',
	'footer.a11y': 'Accessibilité',

	// catalogue (card grid)
	'catalogue.intro':
		'Notre offre comporte deux niveaux : des cours à l’unité (20 à 60 heures) et des forfaits (120 à 330 heures). Tous les prix sont en dollars canadiens, avant taxes : 13 % de TVH s’ajoutent au paiement. Une heure de cours = 60 minutes, en ligne comme sur place.',
	'catalogue.bundlesTitle': 'Les forfaits',
	'catalogue.bundlesText':
		'Un forfait n’est pas un nouveau cours : ce sont les cours à l’unité ci-dessus, assemblés en un parcours complet selon votre objectif, à un prix inférieur à la somme des cours. Le manuel est inclus, et le paiement mensuel sans frais est possible.',
	'catalogue.bundleTag': 'Forfait',
	'catalogue.bundleCta': 'Voir le forfait',

	// course detail pages
	'course.hours': 'Durée',
	'course.price': 'Prix',
	'course.duration': 'Calendrier',
	'course.goal': 'Objectif',
	'course.forWho': 'Pour qui',
	'course.learn': 'Ce que vous allez apprendre',
	'course.format': 'Organisation',
	'course.cta': 'Réserver un test de niveau',
	'course.details': 'Détails du cours',
	'course.related': 'Cours similaires',
	'course.all': 'Tout le catalogue',
	'course.onRequest': 'Sur demande',
	'course.rolling': 'Entrée continue : après le test de niveau, vous rejoignez le groupe de votre niveau dès la semaine suivante, en salle ou en ligne.',

	// news index and articles
	'news.all': 'Toutes',
	'news.more': 'Afficher plus d’articles',
	'news.related': 'À lire aussi',
	'news.allArticles': 'Toutes les actualités',

	// team
	'team.intro':
		'Nos enseignants sont tous de langue maternelle française ou ont un niveau DALF C1 ou supérieur, et chacun passe deux séances d’essai avant d’entrer en classe. Voici qui enseigne, quel niveau, et depuis combien de temps.',
	'team.approach': 'Sa façon de faire :',

	// stories
	'stories.intro':
		'Vingt parcours partagés par des apprenants, des parents et une équipe en entreprise : examens, français du quotidien, soutien scolaire et communication professionnelle. Chacun présente le point de départ, l’objectif, la formation et le résultat.',
	'stories.browse': 'Parcourir les {n} témoignages',
	'stories.start': 'Départ',
	'stories.goal': 'Objectif',
	'stories.result': 'Résultat',
	'stories.duration': 'Durée',
	'stories.disclaimer':
		'Les témoignages ont été traduits et légèrement révisés pour faciliter la lecture. Chaque parcours est individuel et ne garantit pas un résultat identique. Vous voulez connaître votre niveau ? Réservez un test de niveau, gratuit et de 40 minutes.',

	// hero trust strip
	'hero.trust.1': 'Petits groupes de 8 max.',
	'hero.trust.2': 'Enseignants natifs ou DALF C1+',
	'hero.trust.3': 'En ligne ou sur place',
	'hero.trust.4': 'TEF · TCF · DELF',

	// closing CTA band on content pages
	'cta.title': 'Vous ne savez pas par où commencer ?',
	'cta.text': 'Un test de niveau de 40 minutes, gratuit et sans engagement. Vous repartez avec un avis écrit : quel niveau, combien de temps, quel examen.',
	'cta.btn': 'Réserver un test de niveau',
	'cta.alt': 'Voir le catalogue',

	// hub pages and long-read layout
	'hub.seeAll': 'Voir les {n} cours',
	'hub.details': 'En détail',
	'hub.howToChoose': 'Comment choisir',
	'hub.examCta': 'Tout sur cet examen',
	'toc.title': 'Sur cette page',
	'faq.expandAll': 'Tout déplier',
	'faq.collapseAll': 'Tout replier',
	'footer.latest': 'Dernières actualités',
	'footer.more': 'Aussi',
} as const;

export type UiKey = keyof typeof fr;

const en: Record<UiKey, string> = {
	'meta.title': 'Global French Education | French courses and TEF / TCF preparation in Brampton (Toronto area)',
	'meta.description':
		'Small-group French courses (8 students maximum) in Brampton, Ontario. Preparation for TEF Canada, TCF Canada and DELF.',

	'nav.home': 'Home',
	'nav.courses': 'Courses',
	'nav.exams': 'Exams',
	'nav.enroll': 'Enrol',
	'nav.school': 'Our School',
	'nav.about': 'About Us',
	'nav.team': 'Team',
	'nav.stories': 'Student Stories',
	'nav.campus': 'Campus',
	'nav.news': 'News',
	'nav.contact': 'Contact',
	'nav.followUs': 'Follow Us:',
	'nav.applyNow': 'Book a Test',
	'nav.sideText': 'Small-group French courses in Brampton, to pass the exam and dare to speak.',
	'nav.c.overview': 'Overview',
	'nav.c.bundles': 'Bundles',
	'nav.c.levels': 'Courses by level',
	'nav.c.examprep': 'Exam preparation',
	'nav.c.specialist': 'Specialist courses',
	'nav.c.oneonone': 'One-on-one',
	'nav.c.catalogue': 'Full catalogue',
	'nav.c.trial': 'Trial lesson',
	'nav.c.online': 'Online classes',
	'nav.e.exams': 'About the exams',
	'nav.e.mock': 'Mock exams',
	'nav.e.tefvstcf': 'TEF or TCF?',
	'nav.e.nclc': 'NCLC converter',
	'nav.i.prices': 'Prices',
	'nav.i.cost': 'Cost calculator',
	'nav.i.enrollment': 'How to enrol',
	'nav.i.path': 'Learning path',
	'nav.i.faq': 'FAQ',
	'nav.s.resources': 'Resources',
	'nav.s.glossary': 'Glossary',
	'nav.s.why': 'Why French',
	'nav.s.city': 'Toronto guide',
	'nav.s.careers': 'Careers',

	'cta.subject': 'Placement test booking',
	'cta.visitSubject': 'Campus visit request',

	'hero.eyebrow': 'Brampton · Ontario',
	'hero.title': 'Speak French, and prove it',
	'hero.sub':
		'Courses taught entirely in French · 8 students maximum per class · TEF / TCF Canada and DELF preparation',
	'hero.btn1': 'Book a placement test (free, 40 min)',
	'hero.btn2': 'View courses',

	'stats.1.n': '8',
	'stats.1.label': 'students maximum per class',
	'stats.2.n': '12',
	'stats.2.label': 'classrooms',
	'stats.3.n': '4,000+',
	'stats.3.label': 'hours of lessons given',

	'programs.title': 'Our Courses',
	'programs.more': 'All Courses',
	'programs.btn': 'Learn More',
	'programs.1.title': 'Elite Full Pathway',
	'programs.1.desc': 'From zero to B2, with intensive TEF preparation.',
	'programs.1.meta': '330 h · about 14 months · From zero to B2',
	'programs.2.title': 'TEF / TCF Canada Preparation',
	'programs.2.desc': 'Four full mock exams, scored section by section.',
	'programs.2.meta': '40 h · $1,400',
	'programs.3.title': 'Levels A1 to B2',
	'programs.3.desc': 'Each level is split into two half-levels, so you can see your progress.',
	'programs.3.meta': '30 to 36 h per half-level · from $1,050',
	'programs.4.title': 'Speaking and Listening',
	'programs.4.desc': 'For those who understand but can’t yet speak.',
	'programs.4.meta': '24 h · $840',
	'programs.taxNote': 'Prices in Canadian dollars, before tax (plus 13% HST).',

	'why.title1': 'Why',
	'why.title2': 'Choose Us',
	'why.1.title': 'Eight students maximum per class.',
	'why.1.text':
		'It is not for lack of space: beyond that, not everyone gets to speak in every class. At least half of each class is spent speaking.',
	'why.2.title': 'Levels that are really levels.',
	'why.2.text':
		'Placement test first, not classes formed by order of registration. Your level depends on where you are today, not on the package you bought.',
	'why.3.title': 'No teaching to the test.',
	'why.3.text':
		'We teach the question types and the language skills behind them, so a different exam on the day changes nothing. We do not hand out topics to revise.',
	'why.btn': 'Discover the School',

	'test.title': 'Not sure which level to start at?',
	'test.text':
		'Forty minutes, free, no registration needed. You leave with written advice: which level to start from, roughly how long it takes, and when you can sit the exam.',
	'test.btn': 'Book a Placement Test (free, 40 min)',

	'campus.title': 'A school in the heart of Brampton',
	'campus.text': 'Twelve classrooms · study area · free Wi-Fi',
	'campus.btn': 'Plan a Visit',
	'campus.bottom': 'Our Campus',

	'news.title': 'News',
	'news.text': 'Immigration, exams, method: what you need to know to move forward.',
	'news.viewAll': 'View All',

	'form.title': 'Write to us',
	'form.name': 'Name',
	'form.email': 'Email',
	'form.phone': 'Phone (optional)',
	'form.topic': 'I would like to',
	'form.topic.placement': 'Book a placement test',
	'form.topic.courses': 'Ask about courses',
	'form.topic.enroll': 'Enrol in a course',
	'form.topic.exam': 'Register for an exam',
	'form.topic.corporate': 'Training for my company',
	'form.topic.other': 'Something else',
	'form.message': 'Message',
	'form.consent': 'I agree that my details are used only to answer my request.',
	'form.privacy': 'Privacy policy',
	'form.submit': 'Send',
	'form.sending': 'Sending…',
	'form.success': 'Received. We will reply within one business day.',
	'form.error': 'Sending failed. Please write to info@igedu.ca.',

	'a11y.skip': 'Skip to content',
	'a11y.close': 'Close',
	'dock.whatsapp': 'WhatsApp',
	'dock.call': 'Call',
	'dock.write': 'Write to us',
	'sample.label': 'Sample content',
	'hours.label': 'Opening hours',
	'hours.text': 'Monday to Friday 10:00 am – 9:00 pm · Saturday 10:00 am – 6:00 pm · Sunday closed',

	'footer.about': 'French school founded in 2024 in Brampton. Small-group courses with TEF / TCF Canada preparation.',
	'footer.col1': 'Courses',
	'footer.col1.1': 'Full Pathways',
	'footer.col1.2': 'Exam Preparation',
	'footer.col1.3': 'Courses by Level',
	'footer.col1.4': 'Specialist Courses',
	'footer.col1.5': 'Children and Teens',
	'footer.col2': 'About',
	'footer.col2.1': 'The School',
	'footer.col2.2': 'FAQ',
	'footer.col2.3': 'Campus',
	'footer.col2.4': 'News',
	'footer.col2.5': 'Contact',
	'footer.contact': 'Contact',
	'footer.rights': 'All Rights Reserved',
	'footer.privacy': 'Privacy Policy',
	'footer.terms': 'Terms and Refunds',
	'footer.a11y': 'Accessibility',

	// catalogue (card grid)
	'catalogue.intro':
		'Our offer has two levels: individual courses (20 to 60 hours) and bundles (120 to 330 hours). All prices are in Canadian dollars, before tax: 13% HST is added at checkout. One class hour = 60 minutes, online or on site.',
	'catalogue.bundlesTitle': 'Bundles',
	'catalogue.bundlesText':
		'A bundle is not a new course: it is the individual courses above, assembled into a complete pathway for your goal, at a price lower than the sum of the courses. Textbooks are included, and monthly payment at no extra cost is available.',
	'catalogue.bundleTag': 'Bundle',
	'catalogue.bundleCta': 'See the bundle',

	// course detail pages
	'course.hours': 'Length',
	'course.price': 'Price',
	'course.duration': 'Schedule',
	'course.goal': 'Goal',
	'course.forWho': "Who it's for",
	'course.learn': "What you'll learn",
	'course.format': 'Format',
	'course.cta': 'Book a placement test',
	'course.details': 'Course details',
	'course.related': 'Related courses',
	'course.all': 'Full catalogue',
	'course.onRequest': 'On request',
	'course.rolling': 'Rolling start: after the placement test you join the group at your level the following week, in class or online.',

	// news index and articles
	'news.all': 'All',
	'news.more': 'Show more articles',
	'news.related': 'Read next',
	'news.allArticles': 'All news',

	// team
	'team.intro':
		'All our teachers are native French speakers or hold a DALF C1 or higher, and each teaches two trial sessions before entering a classroom. Here is who teaches what, at which level, and for how long.',
	'team.approach': 'Approach:',

	// stories
	'stories.intro':
		'Twenty accounts from learners, parents and a workplace team, covering exam preparation, everyday French, school support and professional communication. Each gives the starting point, the goal, the training and the outcome.',
	'stories.browse': 'Browse the {n} stories',
	'stories.start': 'Start',
	'stories.goal': 'Goal',
	'stories.result': 'Result',
	'stories.duration': 'Duration',
	'stories.disclaimer':
		'Testimonials have been translated and lightly edited for readability. Outcomes are individual and do not guarantee the same result for another learner. Want to know where you stand? Book a placement test — free, 40 minutes.',

	// hero trust strip
	'hero.trust.1': 'Small groups, 8 max.',
	'hero.trust.2': 'Native or DALF C1+ teachers',
	'hero.trust.3': 'Online or on site',
	'hero.trust.4': 'TEF · TCF · DELF',

	// closing CTA band on content pages
	'cta.title': 'Not sure where to start?',
	'cta.text': 'A 40-minute placement test, free and with no commitment. You leave with a written assessment: which level, how long, which exam.',
	'cta.btn': 'Book a placement test',
	'cta.alt': 'Browse the catalogue',

	// hub pages and long-read layout
	'hub.seeAll': 'See all {n} courses',
	'hub.details': 'In detail',
	'hub.howToChoose': 'How to choose',
	'hub.examCta': 'About this exam',
	'toc.title': 'On this page',
	'faq.expandAll': 'Expand all',
	'faq.collapseAll': 'Collapse all',
	'footer.latest': 'Latest news',
	'footer.more': 'Also',
};

export const ui: Record<Lang, Record<UiKey, string>> = { fr, en };
