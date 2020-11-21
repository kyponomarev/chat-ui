import EventBus from '../utils/event-bus/event-bus';

export interface Attributes {
    [key: string]: string;
}

export interface Handlers {
    [key: string]: (...args: any) => void;
}

export interface PropBasis {
    [key: string]: unknown;
}

export interface Props extends PropBasis {
    class: string;
    handlers: Handlers;
    attributes?: Attributes;
}

export interface Meta {
    props: Props;
    tagName: string;
}


enum BLOCK_EVENTS {
    INIT = "init",
    FLOW_CDM = "flow:component-did-mount",
    FLOW_CDU = "flow:component-did-update",
    FLOW_RENDER = "flow:render"
}

export abstract class Block {
    private static _events = BLOCK_EVENTS;
    private static _instances: Block[] = [];

    private readonly _id: string;

    private _element: Element;
    private _meta: Meta;
    protected _props: Props;
    private _eventBus: () => EventBus;
    private _subscriptions: Map<Element, { [key: string]: (...args: any) => void }>;

    abstract render(): string;

    static generateId(): string {
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
    };

    protected constructor(tagName: string = 'div', props: Props = {class: '', attributes: {}, handlers: {}}) {
        this._id = Block.generateId();

        const eventBus = new EventBus();

        this._meta = {tagName, props};

        this._props = this._makePropsProxy(props);
        this._eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block._events.INIT);

        Block._instances.push(this);
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block._events.INIT, this.init.bind(this));
        eventBus.on(Block._events.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block._events.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block._events.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    private _createResources() {
        const {tagName} = this._meta;
        this._element = this._createDocumentElement(tagName);
        this._element.setAttribute('_key', this.id);
    }

    private init() {
        this._createResources();
        this._eventBus().emit(Block._events.FLOW_CDM);
    }

    private _componentDidMount() {
        this._eventBus().emit(Block._events.FLOW_RENDER);
        this.componentDidMount();
    }

    private _componentDidUpdate(oldProps: Props, newProps: Props) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (response) {
            this._eventBus().emit(Block._events.FLOW_RENDER);
        }
    }


    private _render() {
        this._element.innerHTML = this.render();
        Block.hydrate();
    }

    private _makePropsProxy(props: Props): Props {
        return new Proxy<Props>(props, {
            get(target: Props, key: string) {
                const value = target[key];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target: Props, prop: string, value: unknown) => {
                const previousProps = {...this._meta.props};
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

    private _createDocumentElement(tagName: string): Element {
        return document.createElement(tagName);
    }

    private _gatherListeners() {
        const block = this._element;
        const stack: Array<Element> = [block];
        const subscriptions = new Map<Element, { [key: string]: (...args: any) => void }>();

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

    getInternalElement(query: string): Element {
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
    };

    getContent(): Element {
        return this.element;
    }

    setElement(element: Element) {
        this._element = element;
    }

    componentDidUpdate(oldProps: Props, newProps: Props) {
        return !Object.is(oldProps, newProps);
    }

    get element(): Element {
        return this._element;
    }

    get id(): string {
        return this._id;
    }

    setProps = (nextProps: { [key: string]: unknown; }) => {
        if (!nextProps) {
            return;
        }
        Object.assign(this._props, nextProps);
    };

    show() {
        (<HTMLElement>this.getContent()).style.display = "block";
    }

    hide() {
        (<HTMLElement>this.getContent()).style.display = "none";
    }
}
