import './chat.component.css';
import * as template from './chat.component.handlebars';

import {Block, Props} from '../../modules/block';
import SESSIONS from './mock';
import {Chat} from '../../models/chat';
import ToastService from '../../services/toast/toast.service';
import ChatsService from '../../services/chats/chats.service';
import {App} from '../../app';

export interface Message {
  id: string;
  time: string;
  text: string;
  type: 'received' | 'sent';
  status: 'sent' | 'error' | 'read';
}

export interface Session {
  id: string;
  time: string;
  messages: Message[]
}

export interface ChatProps extends Props, Chat {
  sessions: Session[];
}

export default class ChatComponent extends Block {
  private _chatId: number;

  constructor(props: ChatProps = {
    class: '',
    attributes: {},
    handlers: {},
    id: -1,
    title: 'Chat',
    avatar: '',
    sessions: SESSIONS,
  }) {
    super('div', {
      ...props,
    });

    this._chatId = props.id;
    App.eventBus.on(ChatsService.events.CHATS_LOADED_BY_ID, this._onChatLoad.bind(this));
    App.eventBus.on(ChatsService.events.CHATS_LOAD_BY_ID_FAILURE, this._onChatLoadError.bind(this));
    App.eventBus.emit(ChatsService.events.CHATS_LOAD_BY_ID, this._chatId);
  }

  render(): string {
    return template(this._props);
  }

  private _onChatLoad(chat: Chat) {
    this.setProps({...chat});
  }

  private _onChatLoadError(error: string) {
    App.eventBus.emit(ToastService.events.TOAST_SHOW, error);
  }
}
