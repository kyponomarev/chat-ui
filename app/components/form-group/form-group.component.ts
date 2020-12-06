import './form-group.component.css';
import * as template from './form-group.component.handlebars';

import {Block} from '../../modules/block';

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
  private readonly _labelSelector = '.form-group__validation-feedback';

  private readonly _inputSelector = '.input';

  private _invalid: boolean;

  private _pattern: RegExp;

  private _value: string;

  private _name: string;

  constructor(field: FormField) {
    super('div', {
      ...field,
      attributes: {},
      class: 'form-group form__form-group',
      handlers: {
        blurHandler: () => this._onBlur(),
        focusHandler: () => this._onFocus(),
        keyupHandler: (evt: Event) => this._onKeyup(evt),
      },
    });

    const {pattern, defaultValue, name} = field;
    Object.assign(this, {
      _invalid: pattern.test(defaultValue),
      _pattern: pattern,
      _value: defaultValue,
      _name: name,
    });
  }

  render(): string {
    return template(this._props);
  }

  get isInvalid(): boolean {
    this._validate();
    return this._invalid;
  }

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    const input = this.getInternalElement('input');
    if (input) {
      input.setAttribute('value', val);
      this._value = val;
    }
  }

  get name(): any {
    return this._name;
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
    this.getInternalElement(this._labelSelector).classList.remove('hidden');
    this.getInternalElement(this._inputSelector).classList.add('input_error');
  }

  private _setItemValid() {
    this.getInternalElement(this._labelSelector).classList.add('hidden');
    this.getInternalElement(this._inputSelector).classList.remove('input_error');
  }
}
