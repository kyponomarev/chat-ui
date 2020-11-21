import { Block } from "../../modules/block.js";
import { App } from "../../app.js";
import ChatUsersComponent from "../../components/chat-users/chat-users.component.js";
import ChatUsersSearchComponent from "../../components/chat-users-search/chat-users-search.component.js";
import { UsersService } from "../../services/users/users.service.js";
export default class ChatSettingsPage extends Block {
    constructor(props = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: { keyupHandler: event => this._onSearchKeyup(event) },
        backLink: { text: 'Назад', url: '/' }
    }) {
        const chatId = Number(App.router.getParamValue('id'));
        const chatUsers = new ChatUsersComponent({ chatId, users: [], handlers: {}, attributes: {}, class: '' });
        const chatUsersSearch = new ChatUsersSearchComponent({
            chatId,
            users: [],
            handlers: {},
            attributes: {},
            class: ''
        });
        super('div', {
            ...props,
            chatUsers: chatUsers.renderToString(),
            chatUsersSearch: chatUsersSearch.renderToString()
        });
    }
    render() {
        const template = Handlebars.templates['pages/chat-settings/chat-settings.page'];
        return template(this._props);
    }
    _onSearchKeyup(evt) {
        const target = evt.target;
        if (target) {
            App.eventBus.emit(UsersService.events.USERS_SEARCH, target.value);
        }
    }
}
//# sourceMappingURL=chat-settings.page.js.map