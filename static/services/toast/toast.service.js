import { Service } from "../../modules/service.js";
import ToastComponent from "../../components/toast/toast.component.js";
import { render } from "../../utils/render-dom/render-dom.js";
var TOAST_EVENTS;
(function (TOAST_EVENTS) {
    TOAST_EVENTS["TOAST_SHOW"] = "toast:show";
})(TOAST_EVENTS || (TOAST_EVENTS = {}));
export class ToastService extends Service {
    constructor(query = '.app-toast') {
        const toast = new ToastComponent({ class: '', handlers: {} });
        super(TOAST_EVENTS);
        render(query, toast);
        this._toastBlock = toast;
    }
    attachEvents(eventBus) {
        eventBus.on(TOAST_EVENTS.TOAST_SHOW, this.show.bind(this));
        return this;
    }
    show(message) {
        this._toastBlock.showToast(message);
        setTimeout(() => {
            this._toastBlock.hideToast();
        }, 1000);
    }
}
//# sourceMappingURL=toast.service.js.map