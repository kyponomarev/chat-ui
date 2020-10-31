import { Block } from '../../modules/block.js';
import { CHATS } from "./mock.js";
export default class ChatListComponent extends Block {
    constructor(props = {
        class: '',
        chats: CHATS,
        handlers: {},
        attributes: {}
    }) {
        super('div', {
            ...props
        });
    }
    render() {
        const template = Handlebars.templates['components/chat-list/chat-list.component'];
        return template(this._props);
    }
}
//# sourceMappingURL=chat-list.component.js.map