import { Route } from "../route/route.js";
export class Router {
    constructor(rootQuery) {
        if (Router.__instance) {
            return Router.__instance;
        }
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
        Router.__instance = this;
    }
    use(pathname, block, isNotFound) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery }, isNotFound);
        this.routes.push(route);
        return this;
    }
    start() {
        window.onpopstate = ((event) => {
            event.stopPropagation();
            const { location } = event.currentTarget; // TODO replace any
            this._onRoute(location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname);
    }
    _onRoute(pathname) {
        let route = this.getRoute(pathname);
        if (!route) {
            route = this.getNotFoundRoute();
        }
        if (!route) {
            return;
        }
        if (this._currentRoute) {
            this._currentRoute.leave();
        }
        this._currentRoute = route;
        route.render();
    }
    go(pathname) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }
    back() {
        this.history.back();
    }
    forward() {
        this.history.forward();
    }
    getParamValue(key) {
        if (!this._currentRoute) {
            return;
        }
        const pattern = new RegExp(this._currentRoute.pathname.replace(':' + key, '(\\w+)'));
        const match = window.location.href.match(pattern);
        if (match) {
            return match[1];
        }
    }
    getRoute(pathname) {
        return this.routes.find(route => route.match(pathname));
    }
    getNotFoundRoute() {
        return this.routes.find(route => route.isNotFound);
    }
}
//# sourceMappingURL=router.js.map