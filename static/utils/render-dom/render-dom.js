export function render(query, block) {
    const root = document.querySelector(query);
    if (!root) {
        throw new Error(`Element ${query} not found`);
    }
    root.appendChild(block.getContent());
    return root;
}
//# sourceMappingURL=render-dom.js.map