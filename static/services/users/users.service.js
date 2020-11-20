import { Service } from "../../modules/service.js";
import { environment } from "../../environment.js";
import { Http } from "../../utils/http.js";
import { App } from "../../app.js";
var USERS_EVENTS;
(function (USERS_EVENTS) {
    USERS_EVENTS["USERS_SEARCH"] = "users:search";
    USERS_EVENTS["USERS_SEARCH_FAILURE"] = "users:search-failure";
    USERS_EVENTS["USERS_FOUND"] = "users:found";
    USERS_EVENTS["USERS_AVATAR_CHANGE"] = "users:avatar-change";
    USERS_EVENTS["USERS_AVATAR_CHANGE_FAILURE"] = "users:avatar-change-failure";
    USERS_EVENTS["USERS_AVATAR_CHANGED"] = "users:avatar-changed";
    USERS_EVENTS["USERS_PASSWORD_CHANGE"] = "users:password-change";
    USERS_EVENTS["USERS_PASSWORD_CHANGE_FAILURE"] = "users:password-failure";
    USERS_EVENTS["USERS_PASSWORD_CHANGED"] = "users:password-changed";
    USERS_EVENTS["USERS_PROFILE_CHANGE"] = "users:profile-change";
    USERS_EVENTS["USERS_PROFILE_CHANGE_FAILURE"] = "users:profile-failure";
    USERS_EVENTS["USERS_PROFILE_CHANGED"] = "users:profile-changed";
    USERS_EVENTS["USERS_PROFILE_AVATAR_CHANGE"] = "users:profile-avatar-change";
    USERS_EVENTS["USERS_PROFILE_AVATAR_CHANGED"] = "users:profile-avatar-changed";
    USERS_EVENTS["USERS_PROFILE_AVATAR_CHANGE_FAILURE"] = "users:profile-avatar-change-failure";
})(USERS_EVENTS || (USERS_EVENTS = {}));
export class UsersService extends Service {
    constructor() {
        super(USERS_EVENTS);
        this._baseUrl = environment.apiUrl + '/user';
    }
    attachEvents(eventBus) {
        eventBus.on(this.events.USERS_SEARCH, this._search.bind(this));
        eventBus.on(this.events.USERS_PASSWORD_CHANGE, this._changePassword.bind(this));
        eventBus.on(this.events.USERS_PROFILE_CHANGE, this._changeUserProfile.bind(this));
        eventBus.on(this.events.USERS_PROFILE_AVATAR_CHANGE, this._changeUserAvatar.bind(this));
        return this;
    }
    _search(login) {
        Http.post(this._baseUrl + '/search', { data: { login } })
            .then((users) => {
            App.eventBus.emit(App._events.USERS_FOUND, users);
        })
            .catch((error) => {
            App.eventBus.emit(App._events.USERS_SEARCH_FAILURE, error);
        });
    }
    _changePassword(formData) {
        Http.put(this._baseUrl + '/password', { data: { ...formData } })
            .then(() => {
            App.eventBus.emit(App._events.USERS_PASSWORD_CHANGED);
        })
            .catch((error) => {
            console.log('here2');
            App.eventBus.emit(App._events.USERS_PASSWORD_CHANGE_FAILURE, error);
        });
    }
    _changeUserProfile(user) {
        Http.put(this._baseUrl + '/profile', { data: { ...user } })
            .then(() => {
            App.eventBus.emit(App._events.USERS_PROFILE_CHANGED);
        })
            .catch((error) => {
            App.eventBus.emit(App._events.USERS_PROFILE_CHANGE_FAILURE, error);
        });
    }
    _changeUserAvatar(formData) {
        console.log(formData);
        Http.put(this._baseUrl + '/profile/avatar', {
            formData: formData,
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(() => {
            App.eventBus.emit(App._events.USERS_PROFILE_AVATAR_CHANGED);
        })
            .catch((error) => {
            console.log(error);
            App.eventBus.emit(App._events.USERS_PROFILE_AVATAR_CHANGE_FAILURE, error);
        });
    }
}
//# sourceMappingURL=users.service.js.map