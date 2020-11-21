import { Service } from "../../modules/service.js";
import { environment } from "../../environment.js";
import { Http } from "../../utils/http/http.js";
var CHATS_EVENTS;
(function (CHATS_EVENTS) {
    CHATS_EVENTS["CHATS_LOAD"] = "chats:load";
    CHATS_EVENTS["CHATS_LOAD_FAILURE"] = "chats:load-failure";
    CHATS_EVENTS["CHATS_LOADED"] = "chats:loaded";
    CHATS_EVENTS["CHATS_LOAD_BY_ID"] = "chats:load-by-id";
    CHATS_EVENTS["CHATS_LOAD_BY_ID_FAILURE"] = "chats:load-by-id-failure";
    CHATS_EVENTS["CHATS_LOADED_BY_ID"] = "chats:loaded-by-id";
    CHATS_EVENTS["CHATS_CREATE"] = "chats:create";
    CHATS_EVENTS["CHATS_CREATE_FAILURE"] = "chats:create-failure";
    CHATS_EVENTS["CHATS_CREATED"] = "chats:created";
    CHATS_EVENTS["CHATS_USERS_LOAD"] = "chats:users-load";
    CHATS_EVENTS["CHATS_USERS_LOAD_FAILURE"] = "chats:users-load-failure";
    CHATS_EVENTS["CHATS_USERS_LOADED"] = "chats:users-loaded";
    CHATS_EVENTS["CHATS_USERS_ADD"] = "chats:users-add";
    CHATS_EVENTS["CHATS_USERS_ADDED"] = "chats:users-added";
    CHATS_EVENTS["CHATS_USERS_ADD_FAILURE"] = "chats:users-add";
    CHATS_EVENTS["CHATS_USERS_DELETED"] = "chats:users-deleted";
    CHATS_EVENTS["CHATS_USERS_DELETE"] = "chats:users-delete";
    CHATS_EVENTS["CHATS_USERS_DELETE_FAILURE"] = "chats:users-delete-failure";
})(CHATS_EVENTS || (CHATS_EVENTS = {}));
export class ChatsService extends Service {
    constructor(eventBus) {
        super(eventBus);
        this._baseUrl = environment.apiUrl + '/chats';
        this.attachEvents();
    }
    attachEvents() {
        this._eventBus.on(ChatsService.events.CHATS_LOAD, this._loadChats.bind(this));
        this._eventBus.on(ChatsService.events.CHATS_CREATE, this._createChat.bind(this));
        this._eventBus.on(ChatsService.events.CHATS_LOAD_BY_ID, this._loadChat.bind(this));
        this._eventBus.on(ChatsService.events.CHATS_USERS_LOAD, this._loadChatUsers.bind(this));
        this._eventBus.on(ChatsService.events.CHATS_USERS_ADD, this._addUsersToChat.bind(this));
        this._eventBus.on(ChatsService.events.CHATS_USERS_DELETE, this._deleteUsersFromChat.bind(this));
        return this;
    }
    _getChats() {
        return Http.get(this._baseUrl, {});
    }
    _loadChats() {
        this._getChats().then((chats) => {
            this._eventBus.emit(ChatsService.events.CHATS_LOADED, chats);
        }).catch((error) => {
            this._eventBus.emit(ChatsService.events.CHATS_LOAD_FAILURE, error);
        });
    }
    _createChat(title) {
        Http.post(this._baseUrl, { data: { title } })
            .then((res) => {
            this._eventBus.emit(ChatsService.events.CHATS_CREATED, res);
        })
            .catch((error) => {
            this._eventBus.emit(ChatsService.events.CHATS_CREATE_FAILURE, error);
        });
    }
    _loadChat(id) {
        this._getChats().then((chats) => {
            const chat = chats.find(c => c.id === id);
            if (chat) {
                this._eventBus.emit(ChatsService.events.CHATS_LOADED_BY_ID, chat);
            }
            else {
                throw new Error('chat with id=${id} not found');
            }
        }).catch((error) => {
            this._eventBus.emit(ChatsService.events.CHATS_LOAD_BY_ID_FAILURE, error);
        });
    }
    _loadChatUsers(id) {
        Http.get(this._baseUrl + `/${id}/users`, {})
            .then((res) => {
            this._eventBus.emit(ChatsService.events.CHATS_USERS_LOADED, res);
        })
            .catch((error) => {
            this._eventBus.emit(ChatsService.events.CHATS_USERS_LOAD_FAILURE, error);
        });
    }
    _addUsersToChat(chatId, users) {
        Http.put(this._baseUrl + `/users`, { data: { chatId, users } })
            .then(() => {
            this._eventBus.emit(ChatsService.events.CHATS_USERS_ADDED);
        })
            .catch((error) => {
            this._eventBus.emit(ChatsService.events.CHATS_USERS_ADD_FAILURE, error);
        });
    }
    _deleteUsersFromChat(chatId, users) {
        Http.delete(this._baseUrl + `/users`, { data: { chatId, users } })
            .then(() => {
            this._eventBus.emit(ChatsService.events.CHATS_USERS_DELETED, users);
        })
            .catch((error) => {
            this._eventBus.emit(ChatsService.events.CHATS_USERS_DELETE_FAILURE, error);
        });
    }
}
ChatsService.events = CHATS_EVENTS;
//# sourceMappingURL=chats.service.js.map