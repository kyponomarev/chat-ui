import * as template from './chat.page.handlebars';

import {Block, Props} from '../../modules/block';
import ChatListComponent from '../../components/chat-list/chat-list.component';
import ChatComponent from '../../components/chat/chat.component';
import {App} from '../../app';
import SESSIONS from '../../components/chat/mock';
import {Link} from '../../models/link';

export interface ChatPageProps extends Props {
  profileLink: Link
  createLink: Link
  searchBarPlaceholder: string;
}

export default class ChatPage extends Block {
  constructor(props: ChatPageProps = {
    class: 'container container_full-height container_full-width',
    attributes: {},
    handlers: {},
    profileLink: {
      text: 'Профиль',
      url: '/settings',
    },
    createLink: {
      text: 'Создать чат',
      url: '/new-chat',
    },
    searchBarPlaceholder: 'Найти',
  }) {
    super('div', {
      ...props,
      chatList: new ChatListComponent().renderToString(),
      chat: new ChatComponent({
        class: '',
        attributes: {},
        handlers: {},
        id: Number(App.router.getParamValue('id')),
        title: '',
        avatar: '',
        sessions: SESSIONS,
      }).renderToString(),
    });
  }

  render(): string {
    return template(this._props);
  }
}
