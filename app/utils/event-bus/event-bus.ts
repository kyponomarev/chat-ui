type Callback = <T>(...args: T[]) => void;

export interface Listener {
  [key: string]: Callback[];
}

export default class EventBus {
  private listeners: Listener;

  constructor() {
    this.listeners = {};
  }

  private _checkEventExist(event: string) {
    if (!this.listeners[event]) {
      throw new Error(`Event ${event} not found`);
    }
  }

  on(event: string, callback: Callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Callback) {
    this._checkEventExist(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  emit<T>(event: string, ...args: T[]) {
    this._checkEventExist(event);

    this.listeners[event].forEach((cb: Callback) => {
      cb(...args);
    });
  }
}
