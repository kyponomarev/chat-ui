import { Block } from '../../modules/block.js';
import { App } from "../../app.js";
import { environment } from "../../environment.js";
export default class ChatUsersComponent extends Block {
    constructor(props) {
        super('div', {
            ...props,
            handlers: { onRemoveClickHandler: event => this._onRemoveButtonClick(event) }
        });
        App.eventBus.on(App._events.CHATS_USERS_ADDED, this._onUsersAdded.bind(this));
        App.eventBus.on(App._events.CHATS_USERS_DELETED, this._onUsersRemoved.bind(this));
        App.eventBus.on(App._events.CHATS_USERS_LOADED, this._onUsersLoaded.bind(this));
    }
    render() {
        const template = Handlebars.templates['components/chat-users/chat-users.component'];
        return template(this._props);
    }
    componentDidMount() {
        App.eventBus.emit(App._events.CHATS_USERS_LOAD, this._props.chatId);
    }
    _onUsersLoaded(users) {
        users.forEach(u => {
            u.avatar = u.avatar ? environment.uploadsUrl + u.avatar : environment.avatarPlaceholderUrl;
        });
        this.setProps({ users });
    }
    _onUsersAdded() {
        App.eventBus.emit(App._events.CHATS_USERS_LOAD, this._props.chatId);
    }
    _onUsersRemoved(removedUsers) {
        const users = this._props.users.filter(r => removedUsers.indexOf(r.id) === -1);
        this.setProps({ users: users });
    }
    _onRemoveButtonClick(evt) {
        const target = evt.currentTarget;
        if (target) {
            //@ts-ignore
            App.eventBus.emit(App._events.CHATS_USERS_DELETE, this._props.chatId, [Number(target.dataset.id)]);
        }
    }
}
//# sourceMappingURL=chat-users.component.js.map