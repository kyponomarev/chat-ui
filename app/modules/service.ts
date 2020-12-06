import EventBus from '../utils/event-bus/event-bus';

export default abstract class Service {
  protected _eventBus: EventBus;

  protected constructor(eventBus: EventBus) {
    this._eventBus = eventBus;
  }
}
