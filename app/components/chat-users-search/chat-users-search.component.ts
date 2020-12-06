import './chat-users-search.component.css';
import * as template from './chat-users-search.component.handlebars';

import {Block, Props} from '../../modules/block';
import {User} from '../../models/user';
import environment from '../../environment';
import ChatsService from '../../services/chats/chats.service';
import UsersService from '../../services/users/users.service';
import {App} from '../../app';

export interface ChatUsersSearchProps extends Props {
  chatId: number;
  users: User[];
}

export default class ChatUsersSearchComponent extends Block {
  constructor(props: ChatUsersSearchProps) {
    super('div', {
      ...props,
      handlers: {
        addClickHandler: (event) => this._onAddButtonClick(event),
      },
    });

    App.eventBus.on(ChatsService.events.CHATS_USERS_DELETED, this._onUserRemove.bind(this));
    App.eventBus.on(UsersService.events.USERS_FOUND, this._onUsersFound.bind(this));
  }

  render(): string {
    return template(this._props);
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    App.eventBus.emit(UsersService.events.USERS_SEARCH, '');
  }

  private _onUserRemove(removedUsers: number[]) {
    const users = (<ChatUsersSearchProps> this._props).users.filter((r) => removedUsers.indexOf(r.id) === -1);
    this.setProps({users});
  }

  private _onAddButtonClick(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    if (target) {
      // @ts-ignore
      App.eventBus.emit(ChatsService.events.CHATS_USERS_ADD, (<ChatUsersSearchProps> this._props).chatId, [Number(target.dataset.id)]);
    }
  }

  private _onUsersFound(users: User[]) {
    const usersWithAvatars = users.map((u) => ({
      ...u,
      avatar: u.avatar ? environment.uploadsUrl + u.avatar : environment.avatarPlaceholderUrl,
    }));

    this.setProps({users: usersWithAvatars});
  }
}
