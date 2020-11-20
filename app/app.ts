import {Router} from "./utils/router";
import {routes} from "./app.routing";
import EventBus from "./utils/event-bus";
import {Service} from "./modules/service";
import {AuthService} from "./services/auth/auth.service";
import {ToastService} from "./services/toast/toast.service";
import {ChatsService} from "./services/chats/chats.service";
import {UsersService} from "./services/users/users.service";

type ServiceClass = { new(...args: any[]): Service; };

export interface AppProps {
    rootQuery: string;
    services: ServiceClass[]
}

export class App {
    private static __instance: App;
    private static __eventBus: () => EventBus;
    static _events = {} as any;

    static router: Router;

    constructor(props: AppProps = {
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

    private _initServices(servicesClasses: ServiceClass[]) {
        const eventBus = App.eventBus;
        servicesClasses
            .map((serviceClass) => new serviceClass())
            .forEach(s => {
                App._events = Object.assign(App._events, s.events);
                s.attachEvents(eventBus);
            });
    }

    private _initRouterLinks(rootQuery: string) {
        const appElem = document.querySelector(rootQuery);
        if (appElem) {
            appElem.addEventListener('click',
                (function (e: Event) {
                    let elem = <HTMLElement | null>e.target;
                    while (elem) {
                        const attr = elem.getAttribute('routerLink');
                        if (elem.tagName === 'A' && typeof attr !== 'undefined' && typeof attr !== 'object') {
                            const href = elem.getAttribute('href');
                            if (!href) return;
                            App.router.go(href);
                            e.preventDefault();
                            return;
                        }
                        elem = elem.parentElement;
                    }
                }).bind(this));
        }

    }

    static get eventBus(): EventBus {
        if (!App.__eventBus) {
            const eventBus = new EventBus();
            App.__eventBus = () => eventBus;
        }
        return App.__eventBus();
    }

}

