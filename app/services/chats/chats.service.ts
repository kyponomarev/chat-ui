import {Service} from "../../modules/service";
import {environment} from "../../environment";
import EventBus from "../../utils/event-bus";
import {Http} from "../../utils/http";
import {Chat} from "../../models/chat";
import {App} from "../../app";
import {User} from "../../models/user";

enum CHATS_EVENTS {
    CHATS_LOAD = 'chats:load',
    CHATS_LOAD_FAILURE = 'chats:load-failure',
    CHATS_LOADED = 'chats:loaded',
    CHATS_LOAD_BY_ID = 'chats:load-by-id',
    CHATS_LOAD_BY_ID_FAILURE = 'chats:load-by-id-failure',
    CHATS_LOADED_BY_ID = 'chats:loaded-by-id',
    CHATS_CREATE = 'chats:create',
    CHATS_CREATE_FAILURE = 'chats:create-failure',
    CHATS_CREATED = 'chats:created',
    CHATS_USERS_LOAD = 'chats:users-load',
    CHATS_USERS_LOAD_FAILURE = 'chats:users-load-failure',
    CHATS_USERS_LOADED = 'chats:users-loaded',
    CHATS_USERS_ADD = 'chats:users-add',
    CHATS_USERS_ADDED = 'chats:users-added',
    CHATS_USERS_ADD_FAILURE = 'chats:users-add',
    CHATS_USERS_DELETED = 'chats:users-deleted',
    CHATS_USERS_DELETE = 'chats:users-delete',
    CHATS_USERS_DELETE_FAILURE = 'chats:users-delete-failure',
}

export class ChatsService extends Service {
    private _baseUrl = environment.apiUrl + '/chats';

    constructor() {
        super(CHATS_EVENTS);
    }

    attachEvents(eventBus: EventBus): ChatsService {
        eventBus.on(this.events.CHATS_LOAD, this._loadChats.bind(this));
        eventBus.on(this.events.CHATS_CREATE, this._createChat.bind(this));
        eventBus.on(this.events.CHATS_LOAD_BY_ID, this._loadChat.bind(this));
        eventBus.on(this.events.CHATS_USERS_LOAD, this._loadChatUsers.bind(this));
        eventBus.on(this.events.CHATS_USERS_ADD, this._addUsersToChat.bind(this));
        eventBus.on(this.events.CHATS_USERS_DELETE, this._deleteUsersFromChat.bind(this));
        return this;
    }

    private _getChats(): Promise<Chat[]> {
        return <Promise<Chat[]>>Http.get(this._baseUrl, {});
    }

    private _loadChats() {
        this._getChats().then((chats: Chat[]) => {
            App.eventBus.emit(this.events.CHATS_LOADED, chats);
        }).catch((error: string) => {
            App.eventBus.emit(this.events.CHATS_LOAD_FAILURE, error);
        });
    }

    private _createChat(title: string) {
        Http.post(this._baseUrl, {data: {title}})
            .then((res: Chat[]) => {
                App.eventBus.emit(this.events.CHATS_CREATED, res);
            })
            .catch((error: string) => {
                App.eventBus.emit(this.events.CHATS_CREATE_FAILURE, error);
            });
    }

    private _loadChat(id: number) {
        this._getChats().then((chats: Chat[]) => {
            const chat = chats.find(c => c.id === id);
            if (chat) {
                App.eventBus.emit(this.events.CHATS_LOADED_BY_ID, chat);
            } else {
                throw new Error('chat with id=${id} not found');
            }
        }).catch((error: string) => {
            App.eventBus.emit(this.events.CHATS_LOAD_BY_ID_FAILURE, error);
        });
    }

    private _loadChatUsers(id: number) {
        Http.get(this._baseUrl + `/${id}/users`, {})
            .then((res: User[]) => {
                App.eventBus.emit(this.events.CHATS_USERS_LOADED, res);
            })
            .catch((error: string) => {
                App.eventBus.emit(this.events.CHATS_USERS_LOAD_FAILURE, error);
            });
    }

    private _addUsersToChat(chatId: number, users: number[]) {
        Http.put(this._baseUrl + `/users`, {data: {chatId, users}})
            .then(() => {
                App.eventBus.emit(this.events.CHATS_USERS_ADDED);
            })
            .catch((error: string) => {
                App.eventBus.emit(this.events.CHATS_USERS_ADD_FAILURE, error);
            });
    }

    private _deleteUsersFromChat(chatId: number, users: number[]) {
        Http.delete(this._baseUrl + `/users`, {data: {chatId, users}})
            .then(() => {
                App.eventBus.emit(this.events.CHATS_USERS_DELETED, users);
            })
            .catch((error: string) => {
                App.eventBus.emit(this.events.CHATS_USERS_DELETE_FAILURE, error);
            });
    }

}
