import { Service } from "../../modules/service.js";
import ToastComponent from "../../components/toast/toast.component.js";
import { render } from "../../utils/render-dom/render-dom.js";
var TOAST_EVENTS;
(function (TOAST_EVENTS) {
    TOAST_EVENTS["TOAST_SHOW"] = "toast:show";
})(TOAST_EVENTS || (TOAST_EVENTS = {}));
export class ToastService extends Service {
    constructor(eventBus) {
        super(eventBus);
        this._query = '.app-toast';
        const toast = new ToastComponent({ class: '', handlers: {} });
        render(this._query, toast);
        this._toastBlock = toast;
        this.attachEvents();
    }
    attachEvents() {
        this._eventBus.on(TOAST_EVENTS.TOAST_SHOW, this.show.bind(this));
    }
    show(message, type = 'danger') {
        this._toastBlock.showToast(message, type);
        setTimeout(() => {
            this._toastBlock.hideToast();
        }, 2000);
    }
}
ToastService.events = TOAST_EVENTS;
//# sourceMappingURL=toast.service.js.map