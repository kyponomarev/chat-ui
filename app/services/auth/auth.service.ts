import {Service} from "../../modules/service";
import {environment} from "../../environment";
import {App} from "../../app";
import {Http} from "../../utils/http";
import {User} from "../../models/user";
import EventBus from "../../utils/event-bus";

enum AUTH_EVENTS {
    AUTH_SIGN_UP = "auth:sign-up",
    AUTH_SIGN_IN = "auth:sign-in",
    AUTH_LOGOUT = "auth:logout",
    AUTH_SIGNED_UP = "auth:signed-up",
    AUTH_SIGN_UP_FAILURE = "auth:sign-up-failure",
    AUTH_SIGNED_IN = "auth:signed-in",
    AUTH_LOGGED_OUT = "auth:logged_out",
    AUTH_PROFILE_LOAD = 'auth:profile-load',
    AUTH_PROFILE_LOADED = 'auth:profile-loaded',
    AUTH_PROFILE_LOAD_FAILURE = 'auth:profile-load-failure',
}

export class AuthService extends Service {
    private _baseUrl = environment.apiUrl + '/auth';

    constructor() {
        super(AUTH_EVENTS);
    }

    attachEvents(eventBus: EventBus): AuthService {
        eventBus.on(this.events.AUTH_SIGN_UP, this._signUp.bind(this));
        eventBus.on(this.events.AUTH_SIGN_IN, this._signIn.bind(this));
        eventBus.on(this.events.AUTH_LOGOUT, this._logout.bind(this));
        eventBus.on(this.events.AUTH_PROFILE_LOAD, this._loadProfile.bind(this));
        return this;
    }

    private _signIn(formData: {login: string, password: string}) {
        Http.post(this._baseUrl + '/signin', {data: {...formData}})
            .then(req => {
                App.eventBus.emit(App._events.AUTH_SIGNED_IN, req);
            })
            .catch(error => {
                App.eventBus.emit(App._events.AUTH_SIGN_IN_FAILURE, error);
            });
    }

    private _signUp(user: User) {
        Http.post(this._baseUrl + '/signup', {data: {...user}})
            .then(req => {
                App.eventBus.emit(App._events.AUTH_SIGNED_UP, req);
            })
            .catch(error => {
                App.eventBus.emit(App._events.AUTH_SIGN_UP_FAILURE, error);
            });
    }

    private _logout() {
        Http.post(this._baseUrl + '/logout', {})
            .then(() => {
                App.eventBus.emit(App._events.AUTH_LOGGED_OUT);
            })
            .catch((error) => {
                App.eventBus.emit(App._events.AUTH_LOGGED_OUT, error);
            });
    }


    private _loadProfile() {
        Http.get(this._baseUrl + '/user', {})
            .then((user: User) => {
                App.eventBus.emit(App._events.AUTH_PROFILE_LOADED, user);
            })
            .catch((error: string) => {
                App.eventBus.emit(App._events.AUTH_PROFILE_LOAD_FAILURE, error);
            });
    }

}
