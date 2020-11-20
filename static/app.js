import { Router } from "./utils/router.js";
import { routes } from "./app.routing.js";
import EventBus from "./utils/event-bus.js";
import { AuthService } from "./services/auth/auth.service.js";
import { ToastService } from "./services/toast/toast.service.js";
import { ChatsService } from "./services/chats/chats.service.js";
import { UsersService } from "./services/users/users.service.js";
export class App {
    constructor(props = {
        rootQuery: '.app',
        services: [
            AuthService,
            ToastService,
            ChatsService,
            UsersService
        ]
    }) {
        if (App.__instance) {
            return App.__instance;
        }
        this._initServices(props.services);
        App.router = new Router(props.rootQuery);
        routes
            .reduce((router, route) => router.use(route.pathname, route.pageClass, route.isNotFoundPage), App.router)
            .start();
        this._initRouterLinks('body'); // TODO change selector ?
        App.__instance = this;
    }
    _initServices(servicesClasses) {
        const eventBus = App.eventBus;
        servicesClasses
            .map((serviceClass) => new serviceClass())
            .forEach(s => {
            App._events = Object.assign(App._events, s.events);
            s.attachEvents(eventBus);
        });
    }
    _initRouterLinks(rootQuery) {
        const appElem = document.querySelector(rootQuery);
        if (appElem) {
            appElem.addEventListener('click', (function (e) {
                let elem = e.target;
                while (elem) {
                    const attr = elem.getAttribute('routerLink');
                    if (elem.tagName === 'A' && typeof attr !== 'undefined' && typeof attr !== 'object') {
                        const href = elem.getAttribute('href');
                        if (!href)
                            return;
                        App.router.go(href);
                        e.preventDefault();
                        return;
                    }
                    elem = elem.parentElement;
                }
            }).bind(this));
        }
    }
    static get eventBus() {
        if (!App.__eventBus) {
            const eventBus = new EventBus();
            App.__eventBus = () => eventBus;
        }
        return App.__eventBus();
    }
}
App._events = {};
//# sourceMappingURL=app.js.map