import Service from '../../modules/service';
import EventBus from '../../utils/event-bus/event-bus';
import ToastComponent, {ToastTypes} from '../../components/toast/toast.component';
import render from '../../utils/render-dom/render-dom';

enum ToastEvents {
  TOAST_SHOW = 'toast:show',
}

export default class ToastService extends Service {
  static readonly events = ToastEvents;

  private readonly _query = '.app-toast';

  private _toastBlock: ToastComponent;

  constructor(eventBus: EventBus) {
    super(eventBus);

    const toast = new ToastComponent({class: '', handlers: {}});
    render(this._query, toast);
    this._toastBlock = toast;

    this.attachEvents();
  }

  attachEvents() {
    this._eventBus.on(ToastEvents.TOAST_SHOW, this.show.bind(this));
  }

  show(message: string, type: ToastTypes = 'danger') {
    this._toastBlock.showToast(message, type);
    setTimeout(() => {
      this._toastBlock.hideToast();
    }, 2000);
  }
}
