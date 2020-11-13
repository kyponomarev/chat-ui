import {Block, Props} from "../../modules/block";
import FormComponent from "../../components/form/form.component";
import {FormField} from "../../components/form-group/form-group.component";

export interface SettingsPageProps extends Props {
    backLink: { text: string, url: string }
}

export default class SettingsPage extends Block {
    constructor(props: SettingsPageProps = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {},
        backLink: {text: 'Назад', url: '/'}
    }) {

        const fields: FormField[] = [
            {
                labelText: 'Имя',
                pattern: /^.{1,}$/,
                invalidMessage: 'Поле должно быть заполнено',
                defaultValue: '',
                type: 'text',
                name: 'first_name'
            },
            {
                labelText: 'Фамилия',
                pattern: /^.{1,}$/,
                invalidMessage: 'Поле должно быть заполнено',
                defaultValue: '',
                type: 'text',
                name: 'second_name'
            },
            {
                labelText: 'Логин',
                pattern: /^.{3,}$/,
                invalidMessage: 'Длина данного поля должна быть > 3 символов',
                defaultValue: '',
                type: 'text',
                name: 'login'
            },
            {
                labelText: 'Никнейм',
                pattern: /^.{3,}$/,
                invalidMessage: 'Длина данного поля должна быть > 3 символов',
                defaultValue: '',
                type: 'text',
                name: 'display_name'
            },
            {
                labelText: 'Почта',
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                invalidMessage: 'Неверный формат',
                defaultValue: '',
                type: 'email',
                name: 'email'
            },
            {
                labelText: 'Старый пароль',
                pattern: /^.{6,}$/,
                invalidMessage: 'Длина данного поля должна быть > 6 символов',
                defaultValue: '',
                type: 'password',
                name: 'password'
            },
            {
                labelText: 'Новый пароль',
                pattern: /^.{6,}$/,
                invalidMessage: 'Длина данного поля должна быть > 6 символов',
                defaultValue: '',
                type: 'password',
                name: 'password'
            },
            {
                labelText: 'Телефон',
                pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                invalidMessage: 'Неверный формат. Пример: 1234567899',
                defaultValue: '',
                type: 'tel',
                name: 'tel'
            },
        ];

        const form = new FormComponent({
            class: 'form_no-shadow form_no-padding_top',
            attributes: {method: 'POST', action: '/sign-in.html'},
            handlers: {},
            submitButtonText: 'Сохранить',
            fields
        });
        super('div', {...props, form: form.renderToString()});
    }

    render(): string {
        const template = Handlebars.templates['pages/settings/settings.page'];
        return template(this._props);
    }


}

