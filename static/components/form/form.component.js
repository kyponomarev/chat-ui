import { Block } from '../../modules/block.js';
import ButtonComponent from "../button/button.component.js";
import FormGroupComponent from "../form-group/form-group.component.js";
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
        const button = new ButtonComponent({
            text: props.submitButtonText,
            class: 'button_full-width button_primary form__button',
            attributes: { type: 'submit' },
            handlers: {}
        });
        const fgs = props.fields.map(f => new FormGroupComponent(f));
        super('div', {
            ...props,
            button: button.renderToString(),
            backLink: props.backLink,
            handlers: {
                onSubmitHandler: (evt) => this._onSubmit(evt)
            },
            formGroups: fgs.map(f => f.renderToString())
        });
        Object.assign(this, {
            _button: button,
            _successRedirectLink: props.successRedirectLink || '/',
            _formGroups: fgs
        });
    }
    _onSubmit(evt) {
        evt.preventDefault();
        if (this.isInvalid) {
            alert('Форма невалидна');
        }
        else {
            this.onSubmit(this.formData);
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
    get formData() {
        return this._formGroups
            .reduce((acc, fg) => {
            acc[fg.name] = fg.value;
            return acc;
        }, {});
    }
    onSubmit(formData) {
        console.log(formData);
    }
    setFields(fields) {
        fields.forEach(f => {
            const fg = this._formGroups.find(fg => fg.name === f.name);
            if (fg) {
                fg.value = f.defaultValue;
            }
        });
    }
}
//# sourceMappingURL=form.component.js.map