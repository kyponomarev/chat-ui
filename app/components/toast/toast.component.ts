import "./toast.component.css";
import * as template from './toast.component.handlebars';

import {Block, Props} from '../../modules/block';

export type toastTypes = 'danger' | 'success';

export default class ToastComponent extends Block {
    private readonly _messageElementSelector = '.toast__message';
    private readonly _toastElementSelector = '.toast';
    private readonly _toastModifierClassPrefix = 'toast';

    constructor(props: Props) {
        super('div', props);
        this.hide();
    }

    render(): string {
        return template(this._props);
    }

    showToast(message: string, type: toastTypes = 'danger') {
        this.getInternalElement(this._toastElementSelector).classList.add(this._toastModifierClassPrefix + '_' + type);
        this.getInternalElement(this._messageElementSelector).textContent = message;
        this.show();
    }

    hideToast() {
        this.getInternalElement(this._toastElementSelector).classList.remove(this._toastModifierClassPrefix + '_danger', this._toastModifierClassPrefix + '_success');
        this.getInternalElement(this._messageElementSelector).textContent = '';
        this.hide();
    }

}
