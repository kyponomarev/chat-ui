import { Block } from '../../modules/block.js';
import { App } from "../../app.js";
import { environment } from "../../environment.js";
import { ChatsService } from "../../services/chats/chats.service.js";
import { UsersService } from "../../services/users/users.service.js";
export default class ChatUsersSearchComponent extends Block {
    constructor(props) {
        super('div', {
            ...props,
            handlers: {
                addClickHandler: event => this._onAddButtonClick(event)
            }
        });
        App.eventBus.on(ChatsService.events.CHATS_USERS_DELETED, this._onUserRemove.bind(this));
        App.eventBus.on(UsersService.events.USERS_FOUND, this._onUsersFound.bind(this));
    }
    render() {
        const template = Handlebars.templates['components/chat-users-search/chat-users-search.component'];
        return template(this._props);
    }
    componentDidMount() {
        App.eventBus.emit(UsersService.events.USERS_SEARCH, '');
    }
    _onUserRemove(removedUsers) {
        const users = this._props.users.filter(r => removedUsers.indexOf(r.id) === -1);
        this.setProps({ users });
    }
    _onAddButtonClick(evt) {
        const target = evt.currentTarget;
        if (target) {
            //@ts-ignore
            App.eventBus.emit(ChatsService.events.CHATS_USERS_ADD, this._props.chatId, [Number(target.dataset.id)]);
        }
    }
    _onUsersFound(users) {
        users.forEach(u => {
            u.avatar = u.avatar ? environment.uploadsUrl + u.avatar : environment.avatarPlaceholderUrl;
        });
        this.setProps({ users });
    }
}
//# sourceMappingURL=chat-users-search.component.js.map