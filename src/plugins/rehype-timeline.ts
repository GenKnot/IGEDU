// Turns fenced code blocks that are really step diagrams
//   Mois 1–2    A1.1 + A1.2    se présenter…
//      ↓
//   Mois 3–4    …
// into <ol class="gfe-timeline"> with period / module / text per step.
type Node = { type: string; tagName?: string; value?: string; properties?: Record<string, unknown>; children?: Node[] };

const text = (n: Node): string => (n.type === 'text' ? n.value ?? '' : (n.children ?? []).map(text).join(''));
const el = (tagName: string, className: string | null, children: Node[]): Node => ({
	type: 'element',
	tagName,
	properties: className ? { className: [className] } : {},
	children,
});
const txt = (value: string): Node => ({ type: 'text', value });

export default function rehypeTimeline() {
	return (tree: Node) => {
		const visit = (node: Node) => {
			if (!node.children) return;
			node.children = node.children.map((c) => {
				if (c.type === 'element' && c.tagName === 'pre') {
					const code = c.children?.[0];
					const src = code ? text(code) : '';
					if (src.includes('↓')) return build(src);
				}
				visit(c);
				return c;
			});
		};
		visit(tree);
	};
}

function build(src: string): Node {
	const lines = src.split('\n').map((l) => l.trim()).filter((l) => l && l !== '↓');
	const steps = lines.map((line) => {
		const parts = line.split(/\s{2,}/);
		if (parts.length >= 3) {
			return el('li', null, [
				el('span', 'gfe-timeline__period', [txt(parts[0])]),
				el('div', 'gfe-timeline__body', [el('strong', null, [txt(parts[1])]), el('span', null, [txt(parts.slice(2).join(' '))])]),
			]);
		}
		return el('li', 'gfe-timeline__end', [el('span', 'gfe-timeline__period', []), el('div', 'gfe-timeline__body', [el('strong', null, [txt(line)])])]);
	});
	return el('ol', 'gfe-timeline', steps);
}
