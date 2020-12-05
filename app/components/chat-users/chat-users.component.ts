import "./chat-users.component.css";
import * as template from './chat-users.component.handlebars';

import {Block, Props} from '../../modules/block';
import {User} from "../../models/user";
import {App} from "../../app";
import {environment} from "../../environment";
import {ChatsService} from "../../services/chats/chats.service";

export interface ChatUsersProps extends Props {
    chatId: number;
    users: User[];
}

export default class ChatUsersComponent extends Block {

    constructor(props: ChatUsersProps) {

        super('div', {
            ...props,
            handlers: {onRemoveClickHandler: event => this._onRemoveButtonClick(event)}
        });

        App.eventBus.on(ChatsService.events.CHATS_USERS_ADDED, this._onUsersAdded.bind(this));
        App.eventBus.on(ChatsService.events.CHATS_USERS_DELETED, this._onUsersRemoved.bind(this));
        App.eventBus.on(ChatsService.events.CHATS_USERS_LOADED, this._onUsersLoaded.bind(this));

    }

    render(): string {
        return template(this._props);
    }

    componentDidMount() {
        App.eventBus.emit(ChatsService.events.CHATS_USERS_LOAD, this._props.chatId);
    }

    private _onUsersLoaded(users: User[]) {
        users.forEach(u => {
            u.avatar = u.avatar ? environment.uploadsUrl + u.avatar : environment.avatarPlaceholderUrl;
        });
        this.setProps({users});
    }

    private _onUsersAdded() {
        App.eventBus.emit(ChatsService.events.CHATS_USERS_LOAD, this._props.chatId);
    }

    private _onUsersRemoved(removedUsers: number[]) {
        const users = (<ChatUsersProps>this._props).users.filter(r => removedUsers.indexOf(r.id) === -1);
        this.setProps({users: users})
    }

    private _onRemoveButtonClick(evt: Event) {
        const target = evt.currentTarget;
        if (target) {
            //@ts-ignore
            App.eventBus.emit(ChatsService.events.CHATS_USERS_DELETE, (<ChatUsersProps>this._props).chatId, [Number(target.dataset.id)]);
        }
    }

}
