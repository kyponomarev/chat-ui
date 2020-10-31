import {Block, Props} from '../../modules/block';
import {SESSIONS} from "./mock";

export interface Message {
    id: string;
    time: string;
    text: string;
    type: 'received' | 'sent';
    status: 'sent' | 'error' | 'read';
}

export interface Session {
    id: string;
    time: string;
    messages: Message[]
}

export interface ChatProps extends Props {
    id: string;
    authorName: string;
    authorLastVisit: string;
    authorAvatar: string;
    sessions: Session[];
}

export default class ChatComponent extends Block {
    constructor(props: ChatProps = {
        class: '',
        attributes: {},
        handlers: {},
        id: '1',
        authorName: 'Андрей',
        authorLastVisit: 'Был в сети 5 мин назад',
        authorAvatar: '/images/placeholders/user.png',
        sessions: SESSIONS
    }) {

        super('div', {
            ...props
        });
    }

    render(): string {
        const template = Handlebars.templates['components/chat/chat.component'];
        return template(this._props);
    }
}
