import { httpRequest } from '../../utils/api/http';

export interface INewChatRequestBody {
  title: string;
}

const headers = {
  'Content-Type': 'application/json',
};

export class ChatsApi {
  protected readonly _commonUrlPart: string;

  constructor() {
    this._commonUrlPart = '/chats';
  }

  public getChats() {
    return httpRequest.get(`${this._commonUrlPart}`, {});
  }

  public createNewChat(data: INewChatRequestBody) {
    return httpRequest.post(`${this._commonUrlPart}`, { data: JSON.stringify(data), headers });
  }

  public deleteChat(chatId: number) {
    return httpRequest.delete(`${this._commonUrlPart}`, { data: JSON.stringify({ chatId }), headers });
  }

  public changeChatAvatar(data: FormData) {
    return httpRequest.put(`${this._commonUrlPart}/avatar`, { data });
  }
}

export const chatsApi = new ChatsApi();
