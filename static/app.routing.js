import ChatsPage from "./pages/chats/chats.page.js";
import ChatPage from "./pages/chat/chat.page.js";
import SignInPage from "./pages/sign-in/sign-in.page.js";
import SignUpPage from "./pages/sign-up/sign-up.page.js";
import NotFoundPage from "./pages/not-found/not-found.page.js";
import InternalErrorPage from "./pages/internal-error/internal-error.page.js";
import SettingsPage from "./pages/settings/settings.page.js";
export const routes = [
    {
        pathname: '/',
        pageClass: ChatsPage,
    },
    {
        pathname: '/chat',
        pageClass: ChatPage
    },
    {
        pathname: '/sign-in',
        pageClass: SignInPage
    },
    {
        pathname: '/sign-up',
        pageClass: SignUpPage
    },
    {
        pathname: '/settings',
        pageClass: SettingsPage
    },
    {
        pathname: '/not-found',
        pageClass: NotFoundPage,
        isNotFoundPage: true
    },
    {
        pathname: '/internal-error',
        pageClass: InternalErrorPage,
        isInternalErrorPage: true
    }
];
//# sourceMappingURL=app.routing.js.map