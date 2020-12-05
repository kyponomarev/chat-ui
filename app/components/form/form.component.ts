import "./form.component.css";
import * as template from './form.component.handlebars';

import {Block, Props} from '../../modules/block';
import ButtonComponent from "../button/button.component";
import FormGroupComponent, {FormField} from "../form-group/form-group.component";

export interface FormProps extends Props {
    submitButtonText: string;
    fields: FormField[];
    title?: string;
    backLink?: {
        url: string;
        text: string;
    };
    successRedirectLink?: string;
}

export default class FormComponent extends Block {
    private _formGroups: FormGroupComponent[];

    constructor(props: FormProps = {
        class: '',
        attributes: {},
        handlers: {},
        title: 'Войти',
        backLink: {url: '/sign-in', text: 'Назад'},
        submitButtonText: 'Войти',
        fields: [],
        successRedirectLink: '/'
    }) {
        const button = new ButtonComponent(
            {
                text: props.submitButtonText,
                class: 'button_full-width button_primary form__button',
                attributes: {type: 'submit'},
                handlers: {}
            }
        );

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

    private _onSubmit(evt: Event) {
        evt.preventDefault();
        if (this.isInvalid) {
            alert('Форма невалидна');
        } else {
            this.onSubmit(this.formData);
        }
    }


    render(): string {
        return template(this._props);
    }

    get isInvalid(): boolean {
        return this._formGroups
            .map((fg: FormGroupComponent) => fg.isInvalid)
            .indexOf(true) !== -1;
    }

    get formData(): Record<string, unknown> {
        return this._formGroups
            .reduce((acc: any, fg: FormGroupComponent) => {
                acc[fg.name] = fg.value;
                return acc;
            }, {});
    }

    onSubmit(formData: Record<string, unknown>) {
        console.log(formData);
    }

    setFields(fields: FormField[]) {
        fields.forEach(f => {
            const fg = this._formGroups.find(fg => fg.name === f.name);
            if (fg) {
                fg.value = f.defaultValue;
            }
        })
    }

}
