import { Block } from '../../modules/block.js';
export default class ToastComponent extends Block {
    constructor(props) {
        super('div', props);
        this._messageElementSelector = '.toast__message';
        this.hide();
    }
    render() {
        const template = Handlebars.templates['components/toast/toast.component'];
        console.log(template);
        return template(this._props);
    }
    showToast(message) {
        this.getInternalElement(this._messageElementSelector).textContent = message;
        this.show();
    }
    hideToast() {
        this.getInternalElement(this._messageElementSelector).textContent = '';
        this.hide();
    }
}
//# sourceMappingURL=toast.component.js.map