import { store } from '../../store/store';
import { EStoreProperty } from '../../store/model';
import { validateForm } from '../../utils/validation';
import { Popup } from '../../components/Popup/Popup';
import { popupResponseError } from '../../components/Popup/components/PopupResponceError/PopupResponseError';
import {
  chatsApi, IFindPersonRequestData, IManageChatPersonData, INewChatRequestData
} from './chats.api';

class ChatsController {
  public getChats() {
    chatsApi.getChats()
      .then((res: any) => {
        if (res.status === 200) {
          store.set(EStoreProperty.chats, JSON.parse(res.response));
          store.set(EStoreProperty.activeChatId, store.getState().chats[0].id);
          return true;
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }

  public createNewChat(form: HTMLFormElement) {
    const {
      isValidForm,
      filledInputs
    } = validateForm(form);
    return isValidForm && chatsApi.createNewChat(filledInputs as INewChatRequestData)
      .then((res: any) => {
        if (res.status === 200) {
          return chatsController.getChats(); /* eslint-disable-line */
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .then(() => Popup.hide());
  }

  public deleteChat(id: number) {
    return chatsApi.deleteChat(id)
      .then((res: any) => {
        if (res.status === 200) {
          return this.getChats();
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((e) => console.log(e));
  }

  public changeChatAvatar(form: HTMLFormElement) {
    const { isValidForm } = validateForm(form);
    if (isValidForm) {
      const body = new FormData(form as HTMLFormElement);
      body.append('chatId', store.getState()
        .activeChatId
        .toString());
      chatsApi.changeChatAvatar(body)
        .then((res: any) => {
          if (res.status === 200) {
            const chat = JSON.parse(res.response);
            const newChats = store.getState()
              .chats
              .map((item) => (item.id === chat.id ? {
                ...item,
                avatar: chat.avatar
              } : item));
            store.set(EStoreProperty.chats, newChats);
            return Popup.hide();
          }
          return Promise.reject({ ...JSON.parse(res.response) });
        })
        .catch((e) => popupResponseError.setError(e));
    }
  }

  public addPerson(form: HTMLFormElement) {
    const {
      isValidForm,
      filledInputs
    } = validateForm(form);
    return isValidForm && this.findPersonByLogin(filledInputs as IFindPersonRequestData)
      .then((body) => chatsApi.addPerson(body))
      .then((res: any) => {
        if (res.status === 200) {
          return Popup.hide();
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((e) => popupResponseError.setError(e));
  }

  public deletePerson(form: HTMLFormElement) {
    const {
      isValidForm,
      filledInputs
    } = validateForm(form);
    return isValidForm && this.findPersonByLogin(filledInputs as IFindPersonRequestData)
      .then((body) => chatsApi.deletePerson(body))
      .then((res: any) => {
        if (res.status !== 200) {
          return Popup.hide();
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((e: string) => popupResponseError.setError(e));
  }

  public findPersonByLogin(data: IFindPersonRequestData) {
    return chatsApi.findPersonByLogin(data)
      .then((res: any) => {
        if (res.status === 200) {
          return {
            users: [JSON.parse(res.response).id],
            chatId: store.getState().activeChatId
          } as IManageChatPersonData;
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }
}

export const chatsController = new ChatsController();
