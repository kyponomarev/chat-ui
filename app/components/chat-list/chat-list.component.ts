import {Block, Props} from '../../modules/block';
import {App} from "../../app";
import {Chat} from "../../models/chat";

export interface ChatsListProps extends Props {
    chats: Chat[];
}

export default class ChatListComponent extends Block {
    constructor(props: ChatsListProps = {
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

    render(): string {
        const template = Handlebars.templates['components/chat-list/chat-list.component'];
        return template(this._props);
    }

    componentDidMount() {
        // setTimeout(() => {
        //         ChatListComponent.hydrate();
        //     }, 3000
        // )
    }

    private _onChatsLoaded(chats: Chat[]) {
        this.setProps({chats});
        ChatListComponent.hydrate();
    }
}
