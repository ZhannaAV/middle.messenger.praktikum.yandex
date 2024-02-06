import { EventBus } from '../utils/eventBus';
import {
  EStoreProperty,
  IChatTag,
  IMessage,
  IPerson,
  IStore,
  IUser
} from './model';

export enum EStoreEvents {
  ChatsUpdated = 'chatsUpdated',
  ActiveChatIdUpdated = 'activeChatIdUpdated',
  TokenUpdated = 'TokenUpdated',
  UserUpdated = 'userUpdated',
  ChatPersonsUpdated = 'chatPersonsUpdated',
  MessagesUpdated = 'messagesUpdated',
}

/**
 * Set value to object property by path
 * @param object
 * @param path
 * @param value
 */
function set(object: IStore, path: string, value: unknown): IStore {
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
    persons: [],
  },
  messages: []
};

class Store extends EventBus {
  private state: IStore = initialState;

  public set(path: string, value: unknown) {
    set(this.state, path, value);
  }

  public reset() {
    this.state = initialState;
    this.emit(EStoreEvents.UserUpdated);
  }

  public getChatPersons() {
    return this.state.activeChat.persons;
  }

  public setChatPersons(persons: IPerson[]) {
    this.set(EStoreProperty.chatPersons, persons);
    this.emit(EStoreEvents.ChatPersonsUpdated);
  }

  public setActiveChatId(id: number) {
    this.set(EStoreProperty.activeChatId, id);
    this.emit(EStoreEvents.ActiveChatIdUpdated);
  }

  public getActiveChatId() {
    return this.state.activeChatId;
  }

  public setToken(token: string) {
    this.set(EStoreProperty.token, token);
    this.emit(EStoreEvents.TokenUpdated);
  }

  public getToken() {
    return this.state.activeChat.token;
  }

  public setUser(user: IUser) {
    this.set(EStoreProperty.user, user);
    this.emit(EStoreEvents.UserUpdated);
  }

  public getUser() {
    return this.state.user;
  }

  public setChats(chats: IChatTag[]) {
    this.set(EStoreProperty.chats, chats);
    this.emit(EStoreEvents.ChatsUpdated);
  }

  public getChats() {
    return this.state.chats;
  }

  public setChatAvatar(chat: IChatTag) {
    const newChats = this.getChats()
      .map((item) => (item.id === chat.id ? {
        ...item,
        avatar: chat.avatar
      } : item));
    this.setChats(newChats);
  }

  public setMessages(messages: IMessage[] | IMessage) {
    const messageList = (Array.isArray(messages)
      ? messages
      : [messages as IMessage]).concat(this.state.messages) as IMessage[];
    this.set(EStoreProperty.messages, messageList);
    this.emit(EStoreEvents.MessagesUpdated);
  }

  public getMessages() {
    const prev = this.state.messages[0]?.time ? new Date(this.state.messages[0].time) : '';
    let prevDate = prev ? prev.toDateString() : 'today';
    let inx = 0;
    return this.state.messages.reduce((acc, item) => {
      const a = new Date(item.time)?.toDateString();
      if (prevDate === a) {
        acc[inx].list.push(item);
      } else {
        acc.push({
          day: a,
          list: [item]
        });
        prevDate = a;
        inx += 1;
      }
      return acc;
    }, [{
      day: prevDate,
      list: [] as IMessage[]
    }]);
  }

  public clearMessages() {
    this.set(EStoreProperty.messages, []);
    this.emit(EStoreEvents.MessagesUpdated);
  }
}

export const store = new Store();
