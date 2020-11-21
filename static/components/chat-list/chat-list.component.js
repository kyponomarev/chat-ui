import { Block } from '../../modules/block.js';
import { App } from "../../app.js";
import { ChatsService } from "../../services/chats/chats.service.js";
import { ToastService } from "../../services/toast/toast.service.js";
export default class ChatListComponent extends Block {
    constructor(props = {
        class: '',
        chats: [],
        handlers: {},
        attributes: {}
    }) {
        super('div', {
            ...props
        });
        App.eventBus.on(ChatsService.events.CHATS_LOADED, this._onChatsLoaded.bind(this));
        App.eventBus.on(ChatsService.events.CHATS_LOAD_FAILURE, this._onError.bind(this));
        App.eventBus.emit(ChatsService.events.CHATS_LOAD);
    }
    render() {
        const template = Handlebars.templates['components/chat-list/chat-list.component'];
        return template(this._props);
    }
    componentDidMount() {
    }
    _onChatsLoaded(chats) {
        this.setProps({ chats });
        ChatListComponent.hydrate();
    }
    _onError(error) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, error);
    }
}
//# sourceMappingURL=chat-list.component.js.map