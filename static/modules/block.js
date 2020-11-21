import EventBus from '../utils/event-bus/event-bus.js';
var BLOCK_EVENTS;
(function (BLOCK_EVENTS) {
    BLOCK_EVENTS["INIT"] = "init";
    BLOCK_EVENTS["FLOW_CDM"] = "flow:component-did-mount";
    BLOCK_EVENTS["FLOW_CDU"] = "flow:component-did-update";
    BLOCK_EVENTS["FLOW_RENDER"] = "flow:render";
})(BLOCK_EVENTS || (BLOCK_EVENTS = {}));
export class Block {
    constructor(tagName = 'div', props = { class: '', attributes: {}, handlers: {} }) {
        this.setProps = (nextProps) => {
            if (!nextProps) {
                return;
            }
            Object.assign(this._props, nextProps);
        };
        this._id = Block.generateId();
        const eventBus = new EventBus();
        this._meta = { tagName, props };
        this._props = this._makePropsProxy(props);
        this._eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Block._events.INIT);
        Block._instances.push(this);
    }
    static generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    static hydrate() {
        for (const i of Block._instances) {
            const elem = document.querySelector(`[_key=${i.id}]`);
            if (elem) {
                i.setElement(elem);
                i.attachListeners();
            }
        }
    }
    ;
    _registerEvents(eventBus) {
        eventBus.on(Block._events.INIT, this.init.bind(this));
        eventBus.on(Block._events.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block._events.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block._events.FLOW_CDU, this._componentDidUpdate.bind(this));
    }
    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._element.setAttribute('_key', this.id);
    }
    init() {
        this._createResources();
        this._eventBus().emit(Block._events.FLOW_CDM);
    }
    _componentDidMount() {
        this._eventBus().emit(Block._events.FLOW_RENDER);
        this.componentDidMount();
    }
    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._eventBus().emit(Block._events.FLOW_RENDER);
        }
    }
    _render() {
        this._element.innerHTML = this.render();
        Block.hydrate();
    }
    _makePropsProxy(props) {
        return new Proxy(props, {
            get(target, key) {
                const value = target[key];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target, prop, value) => {
                const previousProps = { ...this._meta.props };
                this._meta.props = target;
                target[prop] = value;
                this._eventBus().emit(Block._events.FLOW_CDU, previousProps, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }
    _gatherListeners() {
        const block = this._element;
        const stack = [block];
        const subscriptions = new Map();
        while (stack.length) {
            const current = stack.pop();
            if (!current)
                break;
            const attrs = Array.from(current.attributes).filter(attr => attr.name.startsWith('on'));
            if (!attrs.length) {
                const children = Array.from(current.children);
                stack.push(...children);
                continue;
            }
            if (!subscriptions.get(current)) {
                subscriptions.set(current, {});
            }
            const events = subscriptions.get(current);
            attrs.forEach(attr => {
                const eventName = attr.name.substring(2).toLocaleLowerCase();
                if (events) {
                    events[eventName] = this._props.handlers[attr.value];
                }
                current.removeAttribute(attr.name);
            });
            const children = Array.from(current.children);
            stack.push(...children);
        }
        this._subscriptions = subscriptions;
    }
    getInternalElement(query) {
        const elem = this.getContent().querySelector(query);
        if (!elem) {
            throw new Error('Element not found');
        }
        return elem;
    }
    attachListeners() {
        if (!this._props.handlers) {
            return;
        }
        this._gatherListeners();
        const iterator = this._subscriptions.entries();
        let item = iterator.next();
        while (!item.done) {
            const [elem, events] = item.value;
            Object.keys(events).forEach(eventName => {
                elem.addEventListener(eventName, events[eventName]);
            });
            item = iterator.next();
        }
    }
    renderToString() {
        const wrapper = document.createElement('div');
        wrapper.appendChild(this._element);
        return wrapper.innerHTML;
    }
    componentDidMount() {
    }
    ;
    getContent() {
        return this.element;
    }
    setElement(element) {
        this._element = element;
    }
    componentDidUpdate(oldProps, newProps) {
        return !Object.is(oldProps, newProps);
    }
    get element() {
        return this._element;
    }
    get id() {
        return this._id;
    }
    show() {
        this.getContent().style.display = "block";
    }
    hide() {
        this.getContent().style.display = "none";
    }
}
Block._events = BLOCK_EVENTS;
Block._instances = [];
//# sourceMappingURL=block.js.map