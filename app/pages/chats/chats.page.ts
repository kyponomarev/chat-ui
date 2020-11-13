import {Block, Props} from "../../modules/block";
import ChatListComponent from "../../components/chat-list/chat-list.component";

export interface ChatsPageProps extends Props {
    title: string;
    profileLink: {
        text: string;
        url: string;
    }
    searchBarPlaceholder: string;
}

export default class ChatsPage extends Block {
    constructor(props: ChatsPageProps = {
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

    render(): string {
        const template = Handlebars.templates['pages/chats/chats.page'];
        return template(this._props);
    }
}

