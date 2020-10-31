import { Block } from "../../modules/block.js";
export default class FormGroupComponent extends Block {
    constructor(field) {
        super('div', {
            ...field,
            attributes: {},
            class: 'form-group form__form-group',
            handlers: {
                blurHandler: () => this._onBlur(),
                focusHandler: () => this._onFocus(),
                keyupHandler: (evt) => this._onKeyup(evt)
            }
        });
        const { pattern: _pattern, defaultValue: _value } = field;
        Object.assign(this, { _invalid: _pattern.test(_value), _pattern, _value });
    }
    componentDidMount() {
        setTimeout(() => {
            this.attachListeners();
        });
    }
    render() {
        const template = Handlebars.templates['components/form-group/form-group.component'];
        return template(this._props);
    }
    get isInvalid() {
        this._validate();
        return this._invalid;
    }
    _onBlur() {
        this._validate();
    }
    _onFocus() {
        this._validate();
    }
    _onKeyup(evt) {
        const target = evt.target;
        if (target) {
            this._value = target.value;
        }
        this._validate();
    }
    _validate() {
        this._invalid = !this._pattern.test(this._value);
        if (this._invalid) {
            this._setItemInvalid();
        }
        else {
            this._setItemValid();
        }
    }
    _setItemInvalid() {
        const label = this.getContent().querySelector('.form-group__validation-feedback');
        if (label) {
            label.classList.remove('hidden');
        }
        const input = this.getContent().querySelector('.input');
        if (input) {
            input.classList.add('input_error');
        }
    }
    _setItemValid() {
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
//# sourceMappingURL=form-group.component.js.map