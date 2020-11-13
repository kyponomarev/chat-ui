import { Block } from "../../modules/block.js";
import ChatListComponent from "../../components/chat-list/chat-list.component.js";
import ChatComponent from "../../components/chat/chat.component.js";
export default class ChatPage extends Block {
    constructor(props = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        profileLink: {
            text: 'Профиль',
            url: '/settings',
        },
        searchBarPlaceholder: 'Найти'
    }) {
        super('div', {
            ...props,
            chatList: new ChatListComponent().renderToString(),
            chat: new ChatComponent().renderToString()
        });
    }
    render() {
        const template = Handlebars.templates['pages/chat/chat.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=chat.page.js.map