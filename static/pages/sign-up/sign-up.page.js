import { Block } from "../../modules/block.js";
import FormComponent from "../../components/form/form.component.js";
import { App } from "../../app.js";
import { ToastService } from "../../services/toast/toast.service.js";
import { AuthService } from "../../services/auth/auth.service.js";
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
                name: 'phone'
            },
        ];
        const form = new FormComponent({
            class: '',
            attributes: { method: 'POST', action: '/auth' },
            handlers: {},
            backLink: { url: '/sign-in', text: 'Уже есть аккаунт' },
            title: 'Регистрация',
            submitButtonText: 'Войти',
            fields
        });
        super('div', { ...props, form: form.renderToString() });
        form.onSubmit = this._onFormSubmit.bind(this);
        App.eventBus.on(AuthService.events.AUTH_SIGNED_UP, this._onAuthSuccess.bind(this));
        App.eventBus.on(AuthService.events.AUTH_SIGN_UP_FAILURE, this._onAuthError.bind(this));
    }
    render() {
        const template = Handlebars.templates['pages/sign-up/sign-up.page'];
        return template(this._props);
    }
    _onFormSubmit(formData) {
        App.eventBus.emit(AuthService.events.AUTH_SIGN_UP, formData);
    }
    _onAuthSuccess() {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, 'Добро пожаловать!', 'success');
        App.router.go('/home');
    }
    _onAuthError(error) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, 'Ошибка при регистрации: ' + error);
    }
}
//# sourceMappingURL=sign-up.page.js.map