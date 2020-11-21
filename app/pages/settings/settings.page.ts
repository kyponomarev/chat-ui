import {Block, Props} from "../../modules/block";
import FormComponent from "../../components/form/form.component";
import {FormField} from "../../components/form-group/form-group.component";
import ButtonComponent from "../../components/button/button.component";
import {App} from "../../app";
import {User} from "../../models/user";
import {environment} from "../../environment";
import {AuthService} from "../../services/auth/auth.service";
import {UsersService} from "../../services/users/users.service";
import {ToastService} from "../../services/toast/toast.service";
import {Link} from "../../models/link";

export interface SettingsPageProps extends Props {
    backLink: Link,
    userAvatar: string;
    profileForm?: FormComponent,
    passwordForm?: FormComponent,
    logoutButton?: ButtonComponent
}

export default class SettingsPage extends Block {
    private _profileFormFieldsCreator: (user: User) => FormField[];
    private _profileForm: FormComponent;

    constructor(props: SettingsPageProps = {
        class: 'container container_full-height container_full-width',
        attributes: {},
        handlers: {
            avatarChangeHandler: (event: Event) => this._onAvatarFileChange(event)
        },
        backLink: {text: 'Назад', url: '/home'},
        userAvatar: environment.avatarPlaceholderUrl
    }) {
        const profileFormFieldsCreator = (user: User) => {
            const profileFormFields: FormField[] = [
                {
                    labelText: 'Имя',
                    pattern: /^.{1,}$/,
                    invalidMessage: 'Поле должно быть заполнено',
                    defaultValue: user.first_name,
                    type: 'text',
                    name: 'first_name'
                },
                {
                    labelText: 'Фамилия',
                    pattern: /^.{1,}$/,
                    invalidMessage: 'Поле должно быть заполнено',
                    defaultValue: user.second_name,
                    type: 'text',
                    name: 'second_name'
                },
                {
                    labelText: 'Логин',
                    pattern: /^.{3,}$/,
                    invalidMessage: 'Длина данного поля должна быть > 3 символов',
                    defaultValue: user.login,
                    type: 'text',
                    name: 'login'
                },
                {
                    labelText: 'Никнейм',
                    pattern: /^.{3,}$/,
                    invalidMessage: 'Длина данного поля должна быть > 3 символов',
                    defaultValue: user.display_name,
                    type: 'text',
                    name: 'display_name'
                },
                {
                    labelText: 'Почта',
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    invalidMessage: 'Неверный формат',
                    defaultValue: user.email,
                    type: 'email',
                    name: 'email'
                },
                {
                    labelText: 'Телефон',
                    pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                    invalidMessage: 'Неверный формат. Пример: 1234567899',
                    defaultValue: user.phone,
                    type: 'tel',
                    name: 'phone'
                },
            ];
            return profileFormFields;
        };
        const profileFormFields = profileFormFieldsCreator({
            first_name: '',
            second_name: '',
            login: '',
            phone: '',
            password: '',
            email: '',
            display_name: ''
        } as User);
        const profileForm = new FormComponent({
            class: 'form_no-padding_top',
            attributes: {method: 'POST', action: '/sign-in.html'},
            handlers: {},
            submitButtonText: 'Сохранить',
            fields: profileFormFields
        });

        const passwordFormFields = [{
            labelText: 'Старый пароль',
            pattern: /^.{6,}$/,
            invalidMessage: 'Длина данного поля должна быть > 6 символов',
            defaultValue: '',
            type: 'password',
            name: 'oldPassword'
        },
            {
                labelText: 'Новый пароль',
                pattern: /^.{6,}$/,
                invalidMessage: 'Длина данного поля должна быть > 6 символов',
                defaultValue: '',
                type: 'password',
                name: 'newPassword'
            }
        ];
        const passwordForm = new FormComponent({
            class: 'form_no-padding_top',
            attributes: {method: 'POST', action: ''},
            handlers: {},
            submitButtonText: 'Изменить',
            fields: passwordFormFields
        });

        const logoutButton = new ButtonComponent(
            {
                text: 'Выход',
                class: 'button_full-width button_primary',
                attributes: {},
                handlers: {
                    onClickHandler: () => this._onLogoutButtonClick()
                }
            }
        );
        super('div', {
            ...props,
            profileForm: profileForm.renderToString(),
            passwordForm: passwordForm.renderToString(),
            logoutButton: logoutButton.renderToString()
        });

        passwordForm.onSubmit = this._onPasswordFormSubmit.bind(this);
        profileForm.onSubmit = this._onProfileFormSubmit.bind(this);

        this._profileFormFieldsCreator = profileFormFieldsCreator;
        this._profileForm = profileForm;

        App.eventBus.on(AuthService.events.AUTH_LOGGED_OUT, this._onLoggedOut.bind(this));
        App.eventBus.on(UsersService.events.USERS_PROFILE_CHANGE_FAILURE, this._onError.bind(this));
        App.eventBus.on(UsersService.events.USERS_PASSWORD_CHANGE_FAILURE, this._onError.bind(this));
        App.eventBus.on(AuthService.events.AUTH_PROFILE_LOADED, this._onProfileLoad.bind(this));
        App.eventBus.on(UsersService.events.USERS_PROFILE_AVATAR_CHANGED, this._onAvatarChange.bind(this));
        App.eventBus.on(UsersService.events.USERS_PROFILE_AVATAR_CHANGE_FAILURE, this._onError.bind(this));
        App.eventBus.on(UsersService.events.USERS_PASSWORD_CHANGED, () => {
            this._onSuccess('Вы успешно изменили пароль');
        });
        App.eventBus.on(UsersService.events.USERS_PROFILE_CHANGED, () => {
            this._onSuccess('Вы успешно изменили профиль');
        });

        App.eventBus.emit(AuthService.events.AUTH_PROFILE_LOAD);
    }

    private _onLogoutButtonClick() {
        App.eventBus.emit(AuthService.events.AUTH_LOGOUT);
    }

    private _onLoggedOut() {
        App.router.go('/sign-in');
    }

    render(): string {
        const template = Handlebars.templates['pages/settings/settings.page'];
        return template(this._props);
    }

    private _onProfileLoad(user: User) {
        const userAvatar = user.avatar ? environment.uploadsUrl + user.avatar : environment.avatarPlaceholderUrl;
        this.setProps({userAvatar});
        const fields = this._profileFormFieldsCreator(user);
        this._profileForm.setFields(fields)
    }

    private _onPasswordFormSubmit(formData: FormData) {
        App.eventBus.emit(UsersService.events.USERS_PASSWORD_CHANGE, formData);
    }

    private _onProfileFormSubmit(formData: FormData) {
        App.eventBus.emit(UsersService.events.USERS_PROFILE_CHANGE, formData);
    }

    private _onError(error: string) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, 'Ошибка: ' + error);
    }

    private _onSuccess(message: string) {
        App.eventBus.emit(ToastService.events.TOAST_SHOW, message, 'success');
    }

    private _onAvatarFileChange(event: Event) {
        const target: HTMLInputElement = <HTMLInputElement>event.target;

        if (target && target.files && target.files.length > 0) {
            const formData = new FormData();
            formData.append('avatar', target.files[0]);
            App.eventBus.emit(UsersService.events.USERS_PROFILE_AVATAR_CHANGE, formData);
        }
    }

    private _onAvatarChange() {
        App.eventBus.emit(AuthService.events.AUTH_PROFILE_LOAD);
        this._onSuccess('Вы успешно изменили аватарку');
    }


}

