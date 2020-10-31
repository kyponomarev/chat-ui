import {Block, Props} from '../../modules/block';
import {CHATS} from "./mock";

export interface ChatPreview {
    id: string;
    authorName: string;
    authorAvatar: string;
    msgPreview: string;
    count: number;
    time: string;
}

export interface ChatsListProps extends Props {
    chats: ChatPreview[];
}

export default class ChatListComponent extends Block {
    constructor(props: ChatsListProps = {
        class: '',
        chats: CHATS,
        handlers: {},
        attributes: {}
    }) {

        super('div', {
            ...props
        });
    }

    render(): string {
        const template = Handlebars.templates['components/chat-list/chat-list.component'];
        return template(this._props);
    }
}
