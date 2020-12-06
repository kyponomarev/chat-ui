import Service from '../../modules/service';
import environment from '../../environment';
import {Http} from '../../utils/http/http';
import {User} from '../../models/user';
import EventBus from '../../utils/event-bus/event-bus';

enum AuthEvents {
  AUTH_SIGN_UP = 'auth:sign-up',
  AUTH_SIGN_IN = 'auth:sign-in',
  AUTH_LOGOUT = 'auth:logout',
  AUTH_SIGNED_UP = 'auth:signed-up',
  AUTH_SIGN_UP_FAILURE = 'auth:sign-up-failure',
  AUTH_SIGNED_IN = 'auth:signed-in',
  AUTH_SIGN_IN_FAILURE = 'auth:signed-in-failure',
  AUTH_LOGGED_OUT = 'auth:logged_out',
  AUTH_PROFILE_LOAD = 'auth:profile-load',
  AUTH_PROFILE_LOADED = 'auth:profile-loaded',
  AUTH_PROFILE_LOAD_FAILURE = 'auth:profile-load-failure',
}

export default class AuthService extends Service {
  static readonly events = AuthEvents;

  private _baseUrl = `${environment.apiUrl}/auth`;

  constructor(eventBus: EventBus) {
    super(eventBus);
    this.attachEvents();
  }

  attachEvents() {
    this._eventBus.on(AuthService.events.AUTH_SIGN_UP, this._signUp.bind(this));
    this._eventBus.on(AuthService.events.AUTH_SIGN_IN, this._signIn.bind(this));
    this._eventBus.on(AuthService.events.AUTH_LOGOUT, this._logout.bind(this));
    this._eventBus.on(AuthService.events.AUTH_PROFILE_LOAD, this._loadProfile.bind(this));
  }

  private _signIn(formData: { login: string, password: string }) {
    Http.post(`${this._baseUrl}/signin`, {data: {...formData}})
      .then((req) => {
        this._eventBus.emit(AuthService.events.AUTH_SIGNED_IN, req);
      })
      .catch((error) => {
        this._eventBus.emit(AuthService.events.AUTH_SIGN_IN_FAILURE, error);
      });
  }

  private _signUp(user: User) {
    Http.post(`${this._baseUrl}/signup`, {data: {...user}})
      .then((req) => {
        this._eventBus.emit(AuthService.events.AUTH_SIGNED_UP, req);
      })
      .catch((error) => {
        this._eventBus.emit(AuthService.events.AUTH_SIGN_UP_FAILURE, error);
      });
  }

  private _logout() {
    Http.post(`${this._baseUrl}/logout`, {})
      .then(() => {
        this._eventBus.emit(AuthService.events.AUTH_LOGGED_OUT);
      })
      .catch((error) => {
        this._eventBus.emit(AuthService.events.AUTH_LOGGED_OUT, error);
      });
  }

  private _loadProfile() {
    Http.get(`${this._baseUrl}/user`, {})
      .then((user: User) => {
        this._eventBus.emit(AuthService.events.AUTH_PROFILE_LOADED, user);
      })
      .catch((error: string) => {
        this._eventBus.emit(AuthService.events.AUTH_PROFILE_LOAD_FAILURE, error);
      });
  }
}
