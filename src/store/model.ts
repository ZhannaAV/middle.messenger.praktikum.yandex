export enum EStoreProperty {
  user = 'user',
  chats = 'chats',
  activeChatId = 'activeChatId'
}

export interface IUser {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  email: string;
  phone: string;
}

interface ILastMessage {
  user: Omit<IUser, 'id'| 'display_name'>,
  time: string,
  content: string,
}

export interface IChatTag {
  id: number,
  title: string,
  avatar: string,
  created_by: string,
  unread_count: number,
  last_message: ILastMessage,
}

/**
 * {IUser} user Данные пользователя
 * {IChatTag[]} chats Список чатов
 * {string} activeChatId  ID выбранного чата
 */
export interface IStore {
  user: IUser,
  chats: IChatTag[],
  activeChatId: number,
}
