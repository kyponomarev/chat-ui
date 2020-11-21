import { Service } from "../../modules/service.js";
import { environment } from "../../environment.js";
import { Http } from "../../utils/http/http.js";
var AUTH_EVENTS;
(function (AUTH_EVENTS) {
    AUTH_EVENTS["AUTH_SIGN_UP"] = "auth:sign-up";
    AUTH_EVENTS["AUTH_SIGN_IN"] = "auth:sign-in";
    AUTH_EVENTS["AUTH_LOGOUT"] = "auth:logout";
    AUTH_EVENTS["AUTH_SIGNED_UP"] = "auth:signed-up";
    AUTH_EVENTS["AUTH_SIGN_UP_FAILURE"] = "auth:sign-up-failure";
    AUTH_EVENTS["AUTH_SIGNED_IN"] = "auth:signed-in";
    AUTH_EVENTS["AUTH_SIGN_IN_FAILURE"] = "auth:signed-in-failure";
    AUTH_EVENTS["AUTH_LOGGED_OUT"] = "auth:logged_out";
    AUTH_EVENTS["AUTH_PROFILE_LOAD"] = "auth:profile-load";
    AUTH_EVENTS["AUTH_PROFILE_LOADED"] = "auth:profile-loaded";
    AUTH_EVENTS["AUTH_PROFILE_LOAD_FAILURE"] = "auth:profile-load-failure";
})(AUTH_EVENTS || (AUTH_EVENTS = {}));
export class AuthService extends Service {
    constructor(eventBus) {
        super(eventBus);
        this._baseUrl = environment.apiUrl + '/auth';
        this.attachEvents();
    }
    attachEvents() {
        this._eventBus.on(AuthService.events.AUTH_SIGN_UP, this._signUp.bind(this));
        this._eventBus.on(AuthService.events.AUTH_SIGN_IN, this._signIn.bind(this));
        this._eventBus.on(AuthService.events.AUTH_LOGOUT, this._logout.bind(this));
        this._eventBus.on(AuthService.events.AUTH_PROFILE_LOAD, this._loadProfile.bind(this));
    }
    _signIn(formData) {
        Http.post(this._baseUrl + '/signin', { data: { ...formData } })
            .then(req => {
            this._eventBus.emit(AuthService.events.AUTH_SIGNED_IN, req);
        })
            .catch(error => {
            this._eventBus.emit(AuthService.events.AUTH_SIGN_IN_FAILURE, error);
        });
    }
    _signUp(user) {
        Http.post(this._baseUrl + '/signup', { data: { ...user } })
            .then(req => {
            this._eventBus.emit(AuthService.events.AUTH_SIGNED_UP, req);
        })
            .catch(error => {
            this._eventBus.emit(AuthService.events.AUTH_SIGN_UP_FAILURE, error);
        });
    }
    _logout() {
        Http.post(this._baseUrl + '/logout', {})
            .then(() => {
            this._eventBus.emit(AuthService.events.AUTH_LOGGED_OUT);
        })
            .catch((error) => {
            this._eventBus.emit(AuthService.events.AUTH_LOGGED_OUT, error);
        });
    }
    _loadProfile() {
        Http.get(this._baseUrl + '/user', {})
            .then((user) => {
            this._eventBus.emit(AuthService.events.AUTH_PROFILE_LOADED, user);
        })
            .catch((error) => {
            this._eventBus.emit(AuthService.events.AUTH_PROFILE_LOAD_FAILURE, error);
        });
    }
}
AuthService.events = AUTH_EVENTS;
//# sourceMappingURL=auth.service.js.map