import { Service } from "../../modules/service.js";
import { environment } from "../../environment.js";
import { Http } from "../../utils/http/http.js";
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
    constructor(eventBus) {
        super(eventBus);
        this._baseUrl = environment.apiUrl + '/user';
        this.attachEvents();
    }
    attachEvents() {
        this._eventBus.on(UsersService.events.USERS_SEARCH, this._search.bind(this));
        this._eventBus.on(UsersService.events.USERS_PASSWORD_CHANGE, this._changePassword.bind(this));
        this._eventBus.on(UsersService.events.USERS_PROFILE_CHANGE, this._changeUserProfile.bind(this));
        this._eventBus.on(UsersService.events.USERS_PROFILE_AVATAR_CHANGE, this._changeUserAvatar.bind(this));
        return this;
    }
    _search(login) {
        Http.post(this._baseUrl + '/search', { data: { login } })
            .then((users) => {
            this._eventBus.emit(UsersService.events.USERS_FOUND, users);
        })
            .catch((error) => {
            this._eventBus.emit(UsersService.events.USERS_SEARCH_FAILURE, error);
        });
    }
    _changePassword(formData) {
        Http.put(this._baseUrl + '/password', { data: { ...formData } })
            .then(() => {
            this._eventBus.emit(UsersService.events.USERS_PASSWORD_CHANGED);
        })
            .catch((error) => {
            this._eventBus.emit(UsersService.events.USERS_PASSWORD_CHANGE_FAILURE, error);
        });
    }
    _changeUserProfile(user) {
        Http.put(this._baseUrl + '/profile', { data: { ...user } })
            .then(() => {
            this._eventBus.emit(UsersService.events.USERS_PROFILE_CHANGED);
        })
            .catch((error) => {
            this._eventBus.emit(UsersService.events.USERS_PROFILE_CHANGE_FAILURE, error);
        });
    }
    _changeUserAvatar(formData) {
        Http.put(this._baseUrl + '/profile/avatar', {
            formData: formData,
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(() => {
            this._eventBus.emit(UsersService.events.USERS_PROFILE_AVATAR_CHANGED);
        })
            .catch((error) => {
            this._eventBus.emit(UsersService.events.USERS_PROFILE_AVATAR_CHANGE_FAILURE, error);
        });
    }
}
UsersService.events = USERS_EVENTS;
//# sourceMappingURL=users.service.js.map