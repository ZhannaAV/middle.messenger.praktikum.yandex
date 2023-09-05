import { EventBus } from '../utils/eventBus';
import { EStoreProperty, IChatTag, IStore } from './model';

export enum StoreEvents {
  ChatsUpdated = 'chatsUpdated',
  ActiveChatIdUpdated = 'activeChatIdUpdated',
  TokenUpdated = 'TokenUpdated',
  UserUpdated = 'userUpdated',
}

/**
 * Set value to object property by path
 * @param object
 * @param path
 * @param value
 */
function set(object: IStore, path: string, value: unknown): Record<string, any> {
  if (typeof path !== 'string') throw new Error('path must be string');
  if (typeof object === 'object') {
    path.split('.')
      .reduce((acc, el, inx) => {
        if (inx + 1 === path.split('.').length) {
          acc[el] = value;
          return acc;
        }
        if (typeof acc[el] !== 'object') acc[el] = {};
        return acc[el];
      }, object);
  }

  return object;
}

const initialState = {
  user: {
    id: 0,
    login: '',
    first_name: '',
    second_name: '',
    display_name: '',
    avatar: '',
    email: '',
    phone: '',
  },
  chats: [] as IChatTag[],
  activeChatId: 0,
  activeChat: {
    persons: []
  }
};

class Store extends EventBus {
  private state: IStore = initialState;

  public set(path: string, value: unknown) {
    set(this.state, path, value);
  }

  public reset() {
    this.state = initialState;
    this.emit(StoreEvents.UserUpdated);
  }

  public getChatPersonsCount() {
    return this.state.activeChat.persons.length;
  }

  public setActiveChatId(id: number) {
    this.set(EStoreProperty.activeChatId, id);
    this.emit(StoreEvents.ActiveChatIdUpdated);
  }

  public getActiveChatId() {
    return this.state.activeChatId;
  }

  public setToken(token) {
    this.set(EStoreProperty.token, token);
    this.emit(StoreEvents.TokenUpdated);
  }

  public setUser(user) {
    this.set(EStoreProperty.user, user);
    this.emit(StoreEvents.UserUpdated);
  }

  public getUser() {
    return this.state.user;
  }

  public setChats(chats) {
    this.set(EStoreProperty.chats, chats);
    this.emit(StoreEvents.ChatsUpdated);
  }

  public getChats() {
    return this.state.chats;
  }

  public setChatAvatar(chat) {
    const newChats = this.getChats()
      .map((item) => (item.id === chat.id ? {
        ...item,
        avatar: chat.avatar
      } : item));
    this.setChats(newChats);
  }
}

export const store = new Store();
