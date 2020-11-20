import {Block, Props} from '../../modules/block';


export default class ToastComponent extends Block {
    private readonly _messageElementSelector = '.toast__message';

    constructor(props: Props) {
        super('div', props);
        this.hide();
    }

    render(): string {
        const template = Handlebars.templates['components/toast/toast.component'];
        return template(this._props);
    }

    showToast(message: string) {
        this.getInternalElement(this._messageElementSelector).textContent = message;
        this.show();
    }

    hideToast() {
        this.getInternalElement(this._messageElementSelector).textContent = '';
        this.hide();
    }

}
