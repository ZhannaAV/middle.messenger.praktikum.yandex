import { ChatsApi } from '../../chats.api';
import { httpRequest } from '../../../../utils/api/http';

const headers = {
  'Content-Type': 'application/json',
};

export interface IFindPersonRequestBody {
  login: string;
}

export interface IChangePersonsRequestBody {
  users: number[],
  chatId: number
}

class ChatApi extends ChatsApi {
  public getChatToken(chatId: number) {
    return httpRequest.post(`${this._commonUrlPart}/token/${chatId}`, {});
  }

  public getChatPersons(chatId: number) {
    return httpRequest.get(`${this._commonUrlPart}/${chatId}/users`, {});
  }

  public findPersonByLogin(data:IFindPersonRequestBody) {
    return httpRequest.post('/user/search', { data: JSON.stringify(data), headers });
  }

  public addPerson(data: IChangePersonsRequestBody) {
    return httpRequest.put(`${this._commonUrlPart}/users`, { data: JSON.stringify(data), headers });
  }

  public deletePerson(data: IChangePersonsRequestBody) {
    return httpRequest.delete(`${this._commonUrlPart}/users`, { data: JSON.stringify(data), headers });
  }
}

export const chatApi = new ChatApi();
