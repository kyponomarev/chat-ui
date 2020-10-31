import {Block} from "../modules/block";

export function render(query: string, block: Block) {
    const root = document.querySelector(query);

    if (!root) {
        throw new Error(`Element ${query} not found`);
    }

    root.appendChild(block.getContent());
    return root;
}
