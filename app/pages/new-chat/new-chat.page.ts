import * as template from './new-chat.page.handlebars';

import {Block, Props} from "../../modules/block";
import FormComponent from "../../components/form/form.component";
import {FormField} from "../../components/form-group/form-group.component";
import {App} from "../../app";
import {Chat} from "../../models/chat";
import ChatListComponent from "../../components/chat-list/chat-list.component";
import {ChatsService} from "../../services/chats/chats.service";
import {ToastService} from "../../services/toast/toast.service";
import {Link} from "../../models/link";

export interface NewPageProps extends Props {
    backLink: Link
}

export default class NewChatPage extends Block {
    constructor(props: NewPageProps = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        backLink: {text: 'Назад', url: '/home'}
    }) {

        const fields: FormField[] = [
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
            attributes: {method: 'POST', action: '/chats'},
            handlers: {},
            submitButtonText: 'Создать',
            fields
        });

        const chatList = new ChatListComponent();


        super('div', {...props, form: form.renderToString(), chatList: chatList.renderToString()});

        form.onSubmit = this._onFormSubmit.bind(this);
        App.eventBus.on(ChatsService.events.CHATS_CREATED, this._onChatCreated.bind(this));
    }


    render(): string {
        return template(this._props);
    }

    private _onFormSubmit(formData: any) {
        App.eventBus.emit(ChatsService.events.CHATS_CREATE, formData.title);
    }

    private _onChatCreated(chat: Chat) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, 'Чат успешно создан', 'success');
        App.router.go(`/chats/${chat.id}`);
    }

}

