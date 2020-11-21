import { Block } from "../../modules/block.js";
import FormComponent from "../../components/form/form.component.js";
import { App } from "../../app.js";
import ChatListComponent from "../../components/chat-list/chat-list.component.js";
import { ChatsService } from "../../services/chats/chats.service.js";
import { ToastService } from "../../services/toast/toast.service.js";
export default class NewChatPage extends Block {
    constructor(props = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        backLink: { text: 'Назад', url: '/home' }
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
        App.eventBus.on(ChatsService.events.CHATS_CREATED, this._onChatCreated.bind(this));
    }
    render() {
        const template = Handlebars.templates['pages/new-chat/new-chat.page'];
        return template(this._props);
    }
    _onFormSubmit(formData) {
        App.eventBus.emit(ChatsService.events.CHATS_CREATE, formData.title);
    }
    _onChatCreated(chat) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, 'Чат успешно создан', 'success');
        App.router.go(`/chats/${chat.id}`);
    }
}
//# sourceMappingURL=new-chat.page.js.map