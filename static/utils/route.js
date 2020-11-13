import { render } from "./render-dom.js";
export class Route {
    constructor(pathname, view, props, isNotFound = false) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._isNotFound = isNotFound;
    }
    leave() {
        if (this._block) {
            this._block.hide();
        }
    }
    match(pathname) {
        return pathname === this._pathname;
    }
    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            this._blockClass.hydrate();
            return;
        }
        this._block.show();
    }
    get isNotFound() {
        return this._isNotFound;
    }
}
//# sourceMappingURL=route.js.map