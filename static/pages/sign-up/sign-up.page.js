import { Block } from "../../modules/block.js";
import FormComponent from "../../components/form/form.component.js";
export default class SignUpPage extends Block {
    constructor(props = {
        class: 'main main_centered container__main container__main_single',
        attributes: {},
        handlers: {}
    }) {
        const fields = [
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
                labelText: 'Логин',
                pattern: /^.{3,}$/,
                invalidMessage: 'Длина данного поля должна быть > 3 символов',
                defaultValue: '',
                type: 'text',
                name: 'login'
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
                labelText: 'Пароль',
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
                type: 'text',
                name: 'tel'
            },
        ];
        const form = new FormComponent({
            class: '',
            attributes: { method: 'POST', action: '/sign-in.html' },
            handlers: {},
            backLink: { url: '/sign-in.html', text: 'Уже есть аккаунт' },
            title: 'Регистрация',
            submitButtonText: 'Войти',
            fields
        });
        super('div', { ...props, form: form.renderToString() });
    }
    render() {
        const template = Handlebars.templates['pages/sign-up/sign-up.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=sign-up.page.js.map