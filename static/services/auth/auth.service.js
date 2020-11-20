import { Service } from "../../modules/service.js";
import { environment } from "../../environment.js";
import { App } from "../../app.js";
import { Http } from "../../utils/http.js";
var AUTH_EVENTS;
(function (AUTH_EVENTS) {
    AUTH_EVENTS["AUTH_SIGN_UP"] = "auth:sign-up";
    AUTH_EVENTS["AUTH_SIGN_IN"] = "auth:sign-in";
    AUTH_EVENTS["AUTH_LOGOUT"] = "auth:logout";
    AUTH_EVENTS["AUTH_SIGNED_UP"] = "auth:signed-up";
    AUTH_EVENTS["AUTH_SIGN_UP_FAILURE"] = "auth:sign-up-failure";
    AUTH_EVENTS["AUTH_SIGNED_IN"] = "auth:signed-in";
    AUTH_EVENTS["AUTH_LOGGED_OUT"] = "auth:logged_out";
    AUTH_EVENTS["AUTH_PROFILE_LOAD"] = "auth:profile-load";
    AUTH_EVENTS["AUTH_PROFILE_LOADED"] = "auth:profile-loaded";
    AUTH_EVENTS["AUTH_PROFILE_LOAD_FAILURE"] = "auth:profile-load-failure";
})(AUTH_EVENTS || (AUTH_EVENTS = {}));
export class AuthService extends Service {
    constructor() {
        super(AUTH_EVENTS);
        this._baseUrl = environment.apiUrl + '/auth';
    }
    attachEvents(eventBus) {
        eventBus.on(this.events.AUTH_SIGN_UP, this._signUp.bind(this));
        eventBus.on(this.events.AUTH_SIGN_IN, this._signIn.bind(this));
        eventBus.on(this.events.AUTH_LOGOUT, this._logout.bind(this));
        eventBus.on(this.events.AUTH_PROFILE_LOAD, this._loadProfile.bind(this));
        return this;
    }
    _signIn(formData) {
        Http.post(this._baseUrl + '/signin', { data: { ...formData } })
            .then(req => {
            App.eventBus.emit(App._events.AUTH_SIGNED_IN, req);
        })
            .catch(error => {
            App.eventBus.emit(App._events.AUTH_SIGN_IN_FAILURE, error);
        });
    }
    _signUp(user) {
        Http.post(this._baseUrl + '/signup', { data: { ...user } })
            .then(req => {
            App.eventBus.emit(App._events.AUTH_SIGNED_UP, req);
        })
            .catch(error => {
            App.eventBus.emit(App._events.AUTH_SIGN_UP_FAILURE, error);
        });
    }
    _logout() {
        Http.post(this._baseUrl + '/logout', {})
            .then(() => {
            App.eventBus.emit(App._events.AUTH_LOGGED_OUT);
        })
            .catch((error) => {
            App.eventBus.emit(App._events.AUTH_LOGGED_OUT, error);
        });
    }
    _loadProfile() {
        Http.get(this._baseUrl + '/user', {})
            .then((user) => {
            App.eventBus.emit(App._events.AUTH_PROFILE_LOADED, user);
        })
            .catch((error) => {
            console.log(error);
            App.eventBus.emit(App._events.AUTH_PROFILE_LOAD_FAILURE, error);
        });
    }
}
//# sourceMappingURL=auth.service.js.map