import { Block } from '../../modules/block.js';
import { App } from "../../app.js";
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
        App.eventBus.on(App._events.CHATS_LOADED, this._onChatsLoaded.bind(this));
        App.eventBus.emit(App._events.CHATS_LOAD);
    }
    render() {
        const template = Handlebars.templates['components/chat-list/chat-list.component'];
        return template(this._props);
    }
    componentDidMount() {
        // setTimeout(() => {
        //         ChatListComponent.hydrate();
        //     }, 3000
        // )
    }
    _onChatsLoaded(chats) {
        this.setProps({ chats });
        ChatListComponent.hydrate();
    }
}
//# sourceMappingURL=chat-list.component.js.map