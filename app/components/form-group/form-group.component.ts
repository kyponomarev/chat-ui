import {Block} from "../../modules/block";

export interface FormField {
    labelText: string;
    pattern: RegExp;
    invalidMessage: string;
    defaultValue: string;
    type: string;
    name: string;
    placeholder?: string;
}

export default class FormGroupComponent extends Block {
    private _invalid: boolean;
    private _pattern: RegExp;
    private _value: string;

    constructor(field: FormField) {
        super('div', {
            ...field,
            attributes: {},
            class: 'form-group form__form-group',
            handlers: {
                blurHandler: () => this._onBlur(),
                focusHandler: () => this._onFocus(),
                keyupHandler: (evt: Event) => this._onKeyup(evt)
            }
        });

        const {pattern: _pattern, defaultValue: _value} = field;
        Object.assign(this, {_invalid: _pattern.test(_value), _pattern, _value});
    }

    componentDidMount() {
        setTimeout(() => {
            this.attachListeners();
        });
    }

    render(): string {
        const template = Handlebars.templates['components/form-group/form-group.component'];
        return template(this._props);
    }

    get isInvalid(): boolean {
        this._validate();
        return this._invalid;
    }

    private _onBlur() {
        this._validate();
    }

    private _onFocus() {
        this._validate();
    }

    private _onKeyup(evt: Event) {
        const target = evt.target as HTMLInputElement;
        if (target) {
            this._value = target.value;
        }

        this._validate();
    }

    private _validate() {
        this._invalid = !this._pattern.test(this._value);
        if (this._invalid) {
            this._setItemInvalid();
        } else {
            this._setItemValid();
        }
    }


    private _setItemInvalid() {
        const label = this.getContent().querySelector('.form-group__validation-feedback');
        if (label) {
            label.classList.remove('hidden');
        }

        const input = this.getContent().querySelector('.input');
        if (input) {
            input.classList.add('input_error');
        }
    }

    private _setItemValid() {
        const label = this.getContent().querySelector('.form-group__validation-feedback');
        if (label) {
            label.classList.add('hidden');
        }
        const input = this.getContent().querySelector('.input');
        if (input) {
            input.classList.remove('input_error');
        }

    }


}
