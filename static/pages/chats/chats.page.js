import { Block } from "../../modules/block.js";
import ChatListComponent from "../../components/chat-list/chat-list.component.js";
export default class ChatsPage extends Block {
    constructor(props = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        title: 'Выберите чат из списка слева',
        profileLink: {
            text: 'Профиль',
            url: '/settings',
        },
        searchBarPlaceholder: 'Найти'
    }) {
        super('div', {
            ...props,
            chatList: new ChatListComponent().renderToString()
        });
    }
    render() {
        const template = Handlebars.templates['pages/chats/chats.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=chats.page.js.map