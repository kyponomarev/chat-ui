import { Block } from './modules/block';
import ChatsPage from './pages/chats/chats.page';
import ChatPage from './pages/chat/chat.page';
import SignInPage from './pages/sign-in/sign-in.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import NotFoundPage from './pages/not-found/not-found.page';
import InternalErrorPage from './pages/internal-error/internal-error.page';
import SettingsPage from './pages/settings/settings.page';
import NewChatPage from './pages/new-chat/new-chat.page';
import ChatSettingsPage from './pages/chat-settings/chat-settings.page';

type Newable<T> = { new(...args: any[]): T; };

export interface RouteDescriptor {
  pathname: string;
  pageClass: Newable<Block>;
  isNotFoundPage?: boolean;
  isInternalErrorPage?: boolean
}

export const routes: RouteDescriptor[] = [
  {
    pathname: '/',
    pageClass: SignInPage,
  },
  {
    pathname: '/home',
    pageClass: ChatsPage,
  },
  {
    pathname: '/chats/:id',
    pageClass: ChatPage,
  },
  {
    pathname: '/chats/:id/settings',
    pageClass: ChatSettingsPage,
  },
  {
    pathname: '/new-chat',
    pageClass: NewChatPage,
  },
  {
    pathname: '/sign-in',
    pageClass: SignInPage,
  },
  {
    pathname: '/sign-up',
    pageClass: SignUpPage,
  },
  {
    pathname: '/settings',
    pageClass: SettingsPage,
  },
  {
    pathname: '/not-found',
    pageClass: NotFoundPage,
    isNotFoundPage: true,
  },
  {
    pathname: '/internal-error',
    pageClass: InternalErrorPage,
    isInternalErrorPage: true,
  },
];
