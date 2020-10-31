import { Block } from "../../modules/block.js";
import FormComponent from "../../components/form/form.component.js";
export default class SignInPage extends Block {
    constructor(props = {
        class: 'main main_centered container__main container__main_single',
        attributes: {},
        handlers: {}
    }) {
        const fields = [
            {
                labelText: 'Логин',
                pattern: /^.{3,}$/,
                invalidMessage: 'Длина данного поля должна быть > 3 символов',
                defaultValue: '',
                type: 'string',
                name: 'login'
            },
            {
                labelText: 'Пароль',
                pattern: /^.{6,}$/,
                invalidMessage: 'Длина данного поля должна быть > 6 символов',
                defaultValue: '',
                type: 'password',
                name: 'password'
            }
        ];
        const form = new FormComponent({
            class: '',
            attributes: { method: 'POST', action: '/chats.html' },
            handlers: {},
            backLink: { url: '/sign-up.html', text: 'Нет Аккаунта?' },
            title: 'Вход',
            submitButtonText: 'Авторизоваться',
            fields
        });
        super('div', { ...props, form: form.renderToString() });
    }
    render() {
        const template = Handlebars.templates['pages/sign-in/sign-in.page'];
        return template(this._props);
    }
}
//# sourceMappingURL=sign-in.page.js.map