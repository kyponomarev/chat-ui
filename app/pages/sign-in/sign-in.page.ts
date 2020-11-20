import {Block, Props} from "../../modules/block";
import FormComponent from "../../components/form/form.component";
import {FormField} from "../../components/form-group/form-group.component";
import {App} from "../../app";

export default class SignInPage extends Block {
    constructor(props: Props = {
        class: 'main main_centered container__main container__main_single',
        attributes: {},
        handlers: {}
    }) {

        const fields: FormField[] = [
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
            attributes: {method: 'POST', action: '/chats.html'},
            handlers: {},
            backLink: {url: '/sign-up', text: 'Нет Аккаунта?'},
            title: 'Вход',
            submitButtonText: 'Авторизоваться',
            fields
        });
        super('div', {...props, form: form.renderToString()});
        form.onSubmit = this._onFormSubmit.bind(this);

        App.eventBus.on(App._events.AUTH_SIGNED_IN, this._onAuthSuccess.bind(this));
        App.eventBus.on(App._events.AUTH_SIGN_IN_FAILURE, this._onAuthError.bind(this));
    }

    render(): string {
        const template = Handlebars.templates['pages/sign-in/sign-in.page'];
        return template(this._props);
    }

    private _onFormSubmit(formData: FormData) {
        App.eventBus.emit(App._events.AUTH_SIGN_IN, formData);
    }

    private _onAuthSuccess() {
        App.router.go('/');
    }

    private _onAuthError(error: string) {
        App.eventBus.emit(App._events.TOAST_SHOW, 'Ошибка при авторизации: ' + error);
    }


}

