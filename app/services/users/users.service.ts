import {Service} from "../../modules/service";
import {environment} from "../../environment";
import EventBus from "../../utils/event-bus";
import {Http} from "../../utils/http";
import {User} from "../../models/user";
import {App} from "../../app";

enum USERS_EVENTS {
    USERS_SEARCH = "users:search",
    USERS_SEARCH_FAILURE = "users:search-failure",
    USERS_FOUND = "users:found",
    USERS_AVATAR_CHANGE = 'users:avatar-change',
    USERS_AVATAR_CHANGE_FAILURE = 'users:avatar-change-failure',
    USERS_AVATAR_CHANGED = 'users:avatar-changed',
    USERS_PASSWORD_CHANGE = 'users:password-change',
    USERS_PASSWORD_CHANGE_FAILURE = 'users:password-failure',
    USERS_PASSWORD_CHANGED = 'users:password-changed',
    USERS_PROFILE_CHANGE = 'users:profile-change',
    USERS_PROFILE_CHANGE_FAILURE = 'users:profile-failure',
    USERS_PROFILE_CHANGED = 'users:profile-changed',
    USERS_PROFILE_AVATAR_CHANGE = 'users:profile-avatar-change',
    USERS_PROFILE_AVATAR_CHANGED = 'users:profile-avatar-changed',
    USERS_PROFILE_AVATAR_CHANGE_FAILURE = 'users:profile-avatar-change-failure',

}

export class UsersService extends Service {
    private _baseUrl = environment.apiUrl + '/user';

    constructor() {
        super(USERS_EVENTS);
    }

    attachEvents(eventBus: EventBus): UsersService {
        eventBus.on(this.events.USERS_SEARCH, this._search.bind(this));
        eventBus.on(this.events.USERS_PASSWORD_CHANGE, this._changePassword.bind(this));
        eventBus.on(this.events.USERS_PROFILE_CHANGE, this._changeUserProfile.bind(this));
        eventBus.on(this.events.USERS_PROFILE_AVATAR_CHANGE, this._changeUserAvatar.bind(this));
        return this;
    }


    private _search(login: string) {
        Http.post(this._baseUrl + '/search', {data: {login}})
            .then((users: User[]) => {
                App.eventBus.emit(App._events.USERS_FOUND, users);
            })
            .catch((error: string) => {
                App.eventBus.emit(App._events.USERS_SEARCH_FAILURE, error);
            })
    }

    private _changePassword(formData: { oldPassword: string, newPassword: string }) {
        Http.put(this._baseUrl + '/password', {data: {...formData}})
            .then(() => {
                App.eventBus.emit(App._events.USERS_PASSWORD_CHANGED);
            })
            .catch((error: string) => {
                App.eventBus.emit(App._events.USERS_PASSWORD_CHANGE_FAILURE, error);
            });
    }

    private _changeUserProfile(user: User) {
        Http.put(this._baseUrl + '/profile', {data: {...user}})
            .then(() => {
                App.eventBus.emit(App._events.USERS_PROFILE_CHANGED);
            })
            .catch((error: string) => {
                App.eventBus.emit(App._events.USERS_PROFILE_CHANGE_FAILURE, error);
            });
    }

    private _changeUserAvatar(formData: FormData) {
        Http.put(this._baseUrl + '/profile/avatar', {
            formData: formData,
            headers: {'Access-Control-Allow-Origin': '*'}
        })
            .then(() => {
                App.eventBus.emit(App._events.USERS_PROFILE_AVATAR_CHANGED);
            })
            .catch((error: string) => {
                App.eventBus.emit(App._events.USERS_PROFILE_AVATAR_CHANGE_FAILURE, error);
            });
    }
}
