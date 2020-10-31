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
}

export default class FormComponent extends Block {
    private _formGroups: FormGroupComponent[];

    constructor(props: FormProps = {
        class: '',
        attributes: {},
        handlers: {},
        title: 'Войти',
        backLink: {url: '/sign-in.html', text: 'Назад'},
        submitButtonText: 'Войти',
        fields: []
    }) {
        const formGroups = props.fields.map(f => new FormGroupComponent(f));
        const button = new ButtonComponent(
            {
                text: props.submitButtonText,
                class: 'button_full-width button_primary form__button',
                attributes: {type: 'submit'},
                handlers: {}
            }
        );

        super('div', {
            ...props,
            formGroups: formGroups.map(fg => fg.renderToString()),
            button: button.renderToString(),
            backLink: props.backLink,
            handlers: {
                onSubmitHandler: (evt) => this._onSubmit(evt)
            }
        });

        Object.assign(this, {_button: button, _formGroups: formGroups});
    }

    private _onSubmit(evt: Event) {
        evt.preventDefault();
        if (this.isInvalid) {
            alert('Форма невалидна');
        } else {
            window.location.replace((evt.target as HTMLFormElement).action);
        }
    }

    render(): string {
        const template = Handlebars.templates['components/form/form.component'];
        return template(this._props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.attachListeners();
        });
    }

    get isInvalid(): boolean {
        return this._formGroups
            .map((fg: FormGroupComponent) => fg.isInvalid)
            .indexOf(true) !== -1;
    }
}
