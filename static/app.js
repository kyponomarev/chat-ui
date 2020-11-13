import { Router } from "./utils/router.js";
import { routes } from "./app.routing.js";
export class App {
    constructor(rootQuery) {
        this._router = new Router(rootQuery);
        routes
            .reduce((router, route) => router.use(route.pathname, route.pageClass, route.isNotFoundPage), this._router)
            .start();
        this._initRouterLinks('body'); // TODO change selector
    }
    _initRouterLinks(rootQuery) {
        const appElem = document.querySelector(rootQuery);
        if (appElem) {
            appElem.addEventListener('click', (function (e) {
                let elem = e.target;
                while (elem) {
                    const attr = elem.getAttribute('routerLink');
                    // TODO backlink
                    if (elem.tagName === 'A' && typeof attr !== 'undefined' && typeof attr !== 'object') {
                        const href = elem.getAttribute('href');
                        this._router.go(href);
                        e.preventDefault();
                        return;
                    }
                    elem = elem.parentElement;
                }
            }).bind(this));
        }
    }
}
//# sourceMappingURL=app.js.map