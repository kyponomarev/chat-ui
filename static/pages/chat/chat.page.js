import { Block } from "../../modules/block.js";
import ChatListComponent from "../../components/chat-list/chat-list.component.js";
import ChatComponent from "../../components/chat/chat.component.js";
import { App } from "../../app.js";
import { SESSIONS } from "../../components/chat/mock.js";
export default class ChatPage extends Block {
    constructor(props = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        profileLink: {
            text: 'Профиль',
            url: '/settings',
        },
        createLink: {
            text: 'Создать чат',
            url: '/new-chat',
        },
        searchBarPlaceholder: 'Найти'
    }) {
        super('div', {
            ...props,
            chatList: new ChatListComponent().renderToString(),
            chat: new ChatComponent({
                class: '',
                attributes: {},
                handlers: {},
                id: Number(App.router.getParamValue('id')),
                title: '',
                avatar: '',
                sessions: SESSIONS
            }).renderToString()
        });
    }
    render() {
        const template = Handlebars.templates['pages/chat/chat.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=chat.page.js.map