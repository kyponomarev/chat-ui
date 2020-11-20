import {Block, Props} from "../../modules/block";
import {App} from "../../app";
import ChatUsersComponent from "../../components/chat-users/chat-users.component";
import ChatUsersSearchComponent from "../../components/chat-users-search/chat-users-search.component";

export interface ChatSettingsPageProps extends Props {
    backLink: { text: string, url: string },
}

export default class ChatSettingsPage extends Block {
    constructor(props: ChatSettingsPageProps = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {keyupHandler: event => this._onSearchKeyup(event)},
        backLink: {text: 'Назад', url: '/'}
    }) {

        const chatId = Number(App.router.getParamValue('id'));

        const chatUsers = new ChatUsersComponent({chatId, users: [], handlers: {}, attributes: {}, class: ''});
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

    render(): string {
        const template = Handlebars.templates['pages/chat-settings/chat-settings.page'];
        return template(this._props);
    }


    private _onSearchKeyup(evt: Event) {
        const target = evt.target as HTMLInputElement;
        if (target) {
            App.eventBus.emit(App._events.USERS_SEARCH, target.value);
        }
    }

}

