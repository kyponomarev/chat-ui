import { Block } from '../../modules/block.js';
import ButtonComponent from "../button/button.component.js";
import FormGroupComponent from "../form-group/form-group.component.js";
import { Router } from "../../utils/router.js";
export default class FormComponent extends Block {
    constructor(props = {
        class: '',
        attributes: {},
        handlers: {},
        title: 'Войти',
        backLink: { url: '/sign-in', text: 'Назад' },
        submitButtonText: 'Войти',
        fields: [],
        successRedirectLink: '/'
    }) {
        const formGroups = props.fields.map(f => new FormGroupComponent(f));
        const button = new ButtonComponent({
            text: props.submitButtonText,
            class: 'button_full-width button_primary form__button',
            attributes: { type: 'submit' },
            handlers: {}
        });
        super('div', {
            ...props,
            formGroups: formGroups.map(fg => fg.renderToString()),
            button: button.renderToString(),
            backLink: props.backLink,
            handlers: {
                onSubmitHandler: (evt) => this._onSubmit(evt)
            }
        });
        Object.assign(this, {
            _button: button,
            _formGroups: formGroups,
            _successRedirectLink: props.successRedirectLink || '/'
        });
        this._router = new Router('');
    }
    _onSubmit(evt) {
        evt.preventDefault();
        if (this.isInvalid) {
            alert('Форма невалидна');
        }
        else {
            // window.location.replace((evt.target as HTMLFormElement).action);
            this._router.go(this._successRedirectLink);
        }
    }
    render() {
        const template = Handlebars.templates['components/form/form.component'];
        return template(this._props);
    }
    get isInvalid() {
        return this._formGroups
            .map((fg) => fg.isInvalid)
            .indexOf(true) !== -1;
    }
}
//# sourceMappingURL=form.component.js.map