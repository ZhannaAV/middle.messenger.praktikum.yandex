import { EventBus } from '../utils/eventBus';
import { IChatTag, IStore } from './model';

export enum StoreEvents {
  Updated = 'updated',
  ChatsUpdated = 'chatsUpdated'
}

function set(object: any, path: string, value: unknown): any {
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
};

class Store extends EventBus {
  private state: IStore = initialState;

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    return path.startsWith('user') ? this.emit(StoreEvents.Updated) : this.emit(StoreEvents.ChatsUpdated);
  }
}

export const store = new Store();
