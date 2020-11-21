import { Block } from '../../modules/block.js';
import { SESSIONS } from "./mock.js";
import { App } from "../../app.js";
export default class ChatComponent extends Block {
    constructor(props = {
        class: '',
        attributes: {},
        handlers: {},
        id: -1,
        title: 'Chat',
        avatar: '',
        sessions: SESSIONS
    }) {
        super('div', {
            ...props
        });
        this._chatId = props.id;
        App.eventBus.on(App._events.CHATS_LOADED_BY_ID, this._onChatLoad.bind(this));
        App.eventBus.on(App._events.CHATS_LOADED_BY_ID_FAILURE, this._onChatLoadError.bind(this));
        App.eventBus.emit(App._events.CHATS_LOAD_BY_ID, this._chatId);
    }
    render() {
        const template = Handlebars.templates['components/chat/chat.component'];
        return template(this._props);
    }
    _onChatLoad(chat) {
        this.setProps({ ...chat });
    }
    _onChatLoadError(error) {
        console.log(error);
    }
}
//# sourceMappingURL=chat.component.js.map