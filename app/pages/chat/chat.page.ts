import {Block, Props} from "../../modules/block";
import ChatListComponent from "../../components/chat-list/chat-list.component";
import ChatComponent from "../../components/chat/chat.component";

export interface ChatPageProps extends Props {
    profileLink: {
        text: string;
        url: string;
    }
    searchBarPlaceholder: string;
}

export default class ChatPage extends Block {
    constructor(props: ChatPageProps = {
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

    render(): string {
        const template = Handlebars.templates['pages/chat/chat.page'];
        return template(this._props);
    }
}

