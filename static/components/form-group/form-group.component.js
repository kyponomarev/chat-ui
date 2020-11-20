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
        this._labelSelector = '.form-group__validation-feedback';
        this._inputSelector = '.input';
        console.log(this._props.handlers);
        const { pattern: _pattern, defaultValue: _value, name: _name } = field;
        Object.assign(this, { _invalid: _pattern.test(_value), _pattern, _value, _name });
    }
    render() {
        const template = Handlebars.templates['components/form-group/form-group.component'];
        return template(this._props);
    }
    get isInvalid() {
        this._validate();
        return this._invalid;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        const input = this.getInternalElement('input');
        if (input) {
            input.setAttribute('value', val);
            this._value = val;
        }
    }
    get name() {
        return this._name;
    }
    _onBlur() {
        this._validate();
    }
    _onFocus() {
        this._validate();
    }
    _onKeyup(evt) {
        console.log('_onKeyup');
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
        this.getInternalElement(this._labelSelector).classList.remove('hidden');
        this.getInternalElement(this._inputSelector).classList.add('input_error');
    }
    _setItemValid() {
        this.getInternalElement(this._labelSelector).classList.add('hidden');
        this.getInternalElement(this._inputSelector).classList.remove('input_error');
    }
}
//# sourceMappingURL=form-group.component.js.map