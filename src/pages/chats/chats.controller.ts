import { store } from '../../store/store';
import { validateForm } from '../../utils/validation';
import { Popup } from '../../components/Popup/Popup';
import { popupResponseError } from '../../components/Popup/components/PopupResponceError/PopupResponseError';
import { chatsApi, INewChatRequestBody } from './chats.api';
import { router } from '../../utils/routing/router';
import { EPathMap } from '../../utils/routing/model';
import { EErrorStatuses } from '../../components/errorPage/ErrorPage';

export class ChatsController {
  public getChats() {
    chatsApi.getChats()
      .then((res: any) => {
        if (res.status === 200) {
          store.setChats(JSON.parse(res.response));
          store.setActiveChatId(store.getChats()[0].id);
          return true;
        }
        return Promise.reject(res.status.toString());
      })
      .catch((errorStatus) => {
        if (errorStatus === EErrorStatuses.server) {
          router.go(EPathMap.serverError);
        }
      });
  }

  public createNewChat(form: HTMLFormElement) {
    const {
      isValidForm,
      filledInputs
    } = validateForm(form);
    return isValidForm && chatsApi.createNewChat(filledInputs as INewChatRequestBody)
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
        if (res.status === 500) {
          return Promise.reject();
        }
        return true;
      })
      .catch(() => router.go(EPathMap.serverError));
  }

  public changeChatAvatar(form: HTMLFormElement) {
    const { isValidForm } = validateForm(form);
    if (isValidForm) {
      const body = new FormData(form as HTMLFormElement);
      body.append('chatId', store.getActiveChatId()
        .toString());
      chatsApi.changeChatAvatar(body)
        .then((res: any) => {
          if (res.status === 200) {
            store.setChatAvatar(JSON.parse(res.response));
            return Popup.hide();
          }
          return Promise.reject({ ...JSON.parse(res.response) });
        })
        .catch((e) => popupResponseError.setError(e));
    }
  }
}

export const chatsController = new ChatsController();
