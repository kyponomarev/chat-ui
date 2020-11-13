import {Route} from "./route";
import {Block} from "../modules/block";

export interface Props extends Record<string, unknown> { // TODO remove record
    rootQuery: string;
}

export class Router {
    private static __instance: Router;

    private _currentRoute: Route | null;
    private _rootQuery: string;

    routes: Route[];
    history: History;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    // TODO use newable for block
    use(pathname: string, block: { new(...args: any[]): Block; }, isNotFound?: boolean) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery}, isNotFound);
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = ((event: PopStateEvent) => {
            event.stopPropagation();
            const {location} = (event.currentTarget as any); // TODO replace any
            this._onRoute(location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        let route = this.getRoute(pathname);

        if (!route) {
            route = this.getNotFoundRoute();
        }
        // TODO  imrove
        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname));
    }

    getNotFoundRoute(): Route | undefined {
        return this.routes.find(route => route.isNotFound);
    }
}
