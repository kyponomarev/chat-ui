import EventBus from "../utils/event-bus";

export interface ServiceEvents {
    [key: string]: string;
}

export abstract class Service {
    private readonly _events: ServiceEvents;

    constructor(events: ServiceEvents) {
        this._events = events;
    }


    get events() {
        return this._events;
    }

    abstract attachEvents(eventBus: EventBus): Service;

}

