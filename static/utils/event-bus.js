export default class EventBus {
    constructor() {
        this.listeners = {};
    }
    _checkEventExist(event) {
        if (!this.listeners[event]) {
            throw new Error(`Event ${event} not found`);
        }
    }
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }
    off(event, callback) {
        this._checkEventExist(event);
        this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
    }
    emit(event, ...args) {
        this._checkEventExist(event);
        this.listeners[event].forEach(function (cb) {
            cb(...args);
        });
    }
}
//# sourceMappingURL=event-bus.js.map