import {Block, Props} from '../../modules/block';
import {App} from "../../app";
import {Chat} from "../../models/chat";
import {ChatsService} from "../../services/chats/chats.service";
import {ToastService} from "../../services/toast/toast.service";

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


        App.eventBus.on(ChatsService.events.CHATS_LOADED, this._onChatsLoaded.bind(this));
        App.eventBus.on(ChatsService.events.CHATS_LOAD_FAILURE, this._onError.bind(this));
        App.eventBus.emit(ChatsService.events.CHATS_LOAD);
    }

    render(): string {
        const template = Handlebars.templates['components/chat-list/chat-list.component'];
        return template(this._props);
    }

    componentDidMount() {
    }

    private _onChatsLoaded(chats: Chat[]) {
        this.setProps({chats});
        ChatListComponent.hydrate();
    }

    private _onError(error: string) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, error);
    }
}
