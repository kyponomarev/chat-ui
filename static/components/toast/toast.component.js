import { Block } from '../../modules/block.js';
export default class ToastComponent extends Block {
    constructor(props) {
        super('div', props);
        this._messageElementSelector = '.toast__message';
        this._toastElementSelector = '.toast';
        this._toastModifierClassPrefix = 'toast';
        this.hide();
    }
    render() {
        const template = Handlebars.templates['components/toast/toast.component'];
        return template(this._props);
    }
    showToast(message, type = 'danger') {
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
//# sourceMappingURL=toast.component.js.map