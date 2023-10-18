import { store } from '../../store/store';
import { validateForm } from '../../utils/validation';
import { Popup } from '../../components/Popup/Popup';
import { popupResponseError } from '../../components/Popup/components/PopupResponceError/PopupResponseError';
import { chatsApi, INewChatRequestBody } from './chats.api';
import { router } from '../../utils/routing/router';
import { EPathMap } from '../../utils/routing/model';
import { EErrorStatuses } from '../../components/errorPage/ErrorPage';
import { checkResponse, checkResponseWithErrorStatus } from '../../utils/helpers';
import { IChatTag } from '../../store/model';

export class ChatsController {
  public getChats() {
    chatsApi.getChats()
      .then(checkResponseWithErrorStatus)
      .then((chatTags: IChatTag[]) => {
        store.setChats(chatTags);
        store.setActiveChatId(store.getChats()[0].id);
        return true;
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
      .then(checkResponse)
      .then(() => chatsController.getChats()) /* eslint-disable-line */
      .then(() => Popup.hide());
  }

  public deleteChat(id: number) {
    return chatsApi.deleteChat(id)
      .then(checkResponseWithErrorStatus)
      .then(() => this.getChats())
      .catch((errorStatus) => {
        if (errorStatus === EErrorStatuses.server) {
          router.go(EPathMap.serverError);
        }
      });
  }

  public changeChatAvatar(form: HTMLFormElement) {
    const { isValidForm } = validateForm(form);
    if (isValidForm) {
      const body = new FormData(form as HTMLFormElement);
      body.append('chatId', store.getActiveChatId()
        .toString());
      chatsApi.changeChatAvatar(body)
        .then(checkResponse)
        .then((tag: IChatTag) => {
          store.setChatAvatar(tag);
          return Popup.hide();
        })
        .catch((e) => popupResponseError.setError(e));
    }
  }
}

export const chatsController = new ChatsController();
