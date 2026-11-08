// Wraps every Markdown table in <div class="gfe-table"> so wide tables scroll
// horizontally without breaking the table layout (thead/tbody stay aligned).
type Node = { type: string; tagName?: string; properties?: Record<string, unknown>; children?: Node[] };

export default function rehypeWrapTables() {
	return (tree: Node) => {
		const visit = (node: Node) => {
			if (!node.children) return;
			node.children = node.children.map((c) => {
				if (c.type === 'element' && c.tagName === 'table') {
					return { type: 'element', tagName: 'div', properties: { className: ['gfe-table'] }, children: [c] };
				}
				visit(c);
				return c;
			});
		};
		visit(tree);
	};
}
