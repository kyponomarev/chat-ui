import {Service} from "../../modules/service";
import EventBus from "../../utils/event-bus/event-bus";
import ToastComponent from "../../components/toast/toast.component";
import {render} from "../../utils/render-dom/render-dom";

enum TOAST_EVENTS {
    TOAST_SHOW = 'toast:show'
}

export class ToastService extends Service {
    private _toastBlock: ToastComponent;

    constructor(query: string = '.app-toast') {
        const toast = new ToastComponent({class: '', handlers: {}});
        super(TOAST_EVENTS);

        render(query, toast);
        this._toastBlock = toast;
    }

    attachEvents(eventBus: EventBus): ToastService {
        eventBus.on(TOAST_EVENTS.TOAST_SHOW, this.show.bind(this));
        return this;
    }

    show(message: string) {
        this._toastBlock.showToast(message);
        setTimeout(() => {
            this._toastBlock.hideToast();
        }, 1000)
    }


}
