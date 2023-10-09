export enum EStoreProperty {
  user = 'user',
  chats = 'chats',
  activeChatId = 'activeChatId',
  chatPersons = 'activeChat.persons',
  token = 'activeChat.token',
}

export interface IIndex<P = any> {
  [index: string]: P;
}

export interface IUser extends IIndex {
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
  user: Omit<IUser, 'id' | 'display_name'>,
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

export interface IPerson extends Omit<IUser, 'email' | 'phone'> {
  role: string;
}

export interface IActiveChat {
  persons: IPerson[],
  token?: string
}

/**
 * {IUser} user Данные пользователя
 * {IChatTag[]} chats Список чатов
 * {string} activeChatId  ID выбранного чата
 * {IActiveChat} activeChat Участники текущего открытого чата
 */
export interface IStore extends IIndex{
  user: IUser,
  chats: IChatTag[],
  activeChatId: number,
  activeChat: IActiveChat,
}
