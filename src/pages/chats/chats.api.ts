import { httpRequest } from '../../utils/api/http';

export interface INewChatRequestData {
  title: string;
}

export interface IFindPersonRequestData {
  login: string;
}

export interface IManageChatPersonData {
  users: number[],
  chatId: number
}

const headers = {
  'Content-Type': 'application/json',
};

class ChatsApi {
  private readonly _commonUrlPart: string;

  constructor() {
    this._commonUrlPart = '/chats';
  }

  public getChats() {
    return httpRequest.get(`${this._commonUrlPart}`, {});
  }

  public createNewChat(data: INewChatRequestData) {
    return httpRequest.post(`${this._commonUrlPart}`, { data: JSON.stringify(data), headers });
  }

  public deleteChat(chatId: number) {
    return httpRequest.delete(`${this._commonUrlPart}`, { data: JSON.stringify({ chatId }), headers });
  }

  public changeChatAvatar(data: FormData) {
    return httpRequest.put(`${this._commonUrlPart}/avatar`, { data });
  }

  public addPerson(data: IManageChatPersonData) {
    return httpRequest.put(`${this._commonUrlPart}/users`, { data: JSON.stringify(data), headers });
  }

  public deletePerson(data: IManageChatPersonData) {
    return httpRequest.delete(`${this._commonUrlPart}/users`, { data: JSON.stringify(data), headers });
  }

  public findPersonByLogin(data:IFindPersonRequestData) {
    return httpRequest.post('/user/search', { data: JSON.stringify(data), headers });
  }
}

export const chatsApi = new ChatsApi();
