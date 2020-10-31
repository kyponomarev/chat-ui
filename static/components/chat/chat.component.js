import { Block } from '../../modules/block.js';
import { SESSIONS } from "./mock.js";
export default class ChatComponent extends Block {
    constructor(props = {
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
    render() {
        const template = Handlebars.templates['components/chat/chat.component'];
        return template(this._props);
    }
}
//# sourceMappingURL=chat.component.js.map