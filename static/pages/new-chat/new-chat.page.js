import { Block } from "../../modules/block.js";
import FormComponent from "../../components/form/form.component.js";
import { App } from "../../app.js";
import ChatListComponent from "../../components/chat-list/chat-list.component.js";
export default class NewChatPage extends Block {
    constructor(props = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        backLink: { text: 'Назад', url: '/' }
    }) {
        const fields = [
            {
                labelText: 'Наименование',
                pattern: /^.{1,}$/,
                invalidMessage: 'Поле должно быть заполнено',
                defaultValue: '',
                type: 'text',
                name: 'title'
            },
        ];
        const form = new FormComponent({
            class: 'form_no-padding_top',
            attributes: { method: 'POST', action: '/chats' },
            handlers: {},
            submitButtonText: 'Создать',
            fields
        });
        const chatList = new ChatListComponent();
        super('div', { ...props, form: form.renderToString(), chatList: chatList.renderToString() });
        form.onSubmit = this._onFormSubmit.bind(this);
        App.eventBus.on(App._events.CHATS_CREATED, this._onChatCreated.bind(this));
    }
    render() {
        const template = Handlebars.templates['pages/new-chat/new-chat.page'];
        return template(this._props);
    }
    _onFormSubmit(formData) {
        App.eventBus.emit(App._events.CHATS_CREATE, formData.title);
    }
    _onChatCreated(chat) {
        App.router.go(`/chats/${chat.id}`);
    }
}
//# sourceMappingURL=new-chat.page.js.map