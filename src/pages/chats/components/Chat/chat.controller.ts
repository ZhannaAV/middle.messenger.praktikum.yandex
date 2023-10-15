import { ChatsController } from '../../chats.controller';
import { chatApi, IChangePersonsRequestBody, IFindPersonRequestBody } from './chat.api';
import { store } from '../../../../store/store';
import { EErrorStatuses } from '../../../../components/errorPage/ErrorPage';
import { router } from '../../../../utils/routing/router';
import { EPathMap } from '../../../../utils/routing/model';
import { validateForm } from '../../../../utils/validation';
import { Popup } from '../../../../components/Popup/Popup';
import { popupResponseError } from '../../../../components/Popup/components/PopupResponceError/PopupResponseError';
import { IUser } from '../../../../store/model';

class ChatController extends ChatsController {
  public getChatToken(chatId: number) {
    return chatApi.getChatToken(chatId)
      .then((res: any) => {
        if (res.status === 200) {
          store.setToken(JSON.parse(res.response).token);
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

  public findPersonByLogin(data: IFindPersonRequestBody) {
    return chatApi.findPersonByLogin(data)
      .then((res: any) => {
        if (res.status === 200) {
          const identicalLoginPerson = JSON.parse(res.response)
            .find((person: IUser) => person.login === data.login);
          if (identicalLoginPerson) {
            return {
              users: [identicalLoginPerson.id],
              chatId: store.getActiveChatId()
            } as IChangePersonsRequestBody;
          }
          return Promise.reject(`No such person with login ${data.login}. Try another one?`);
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }

  public getChatPersons() {
    return chatApi.getChatPersons(store.getActiveChatId())
      .then((res: any) => {
        if (res.status === 200) {
          store.setChatPersons(JSON.parse(res.response));
          return true;
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }

  public addPerson(form: HTMLFormElement) {
    const {
      isValidForm,
      filledInputs
    } = validateForm(form);
    // eslint-disable-next-line no-use-before-define
    return isValidForm && chatController.findPersonByLogin(filledInputs as IFindPersonRequestBody)
      .then((body) => chatApi.addPerson(body))
      .then((res: any) => {
        if (res.status === 200) {
          Popup.hide();
          // eslint-disable-next-line no-use-before-define
          return chatController.getChatPersons();
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((e) => popupResponseError.setError(e));
  }

  public deletePerson(personId: number) {
    chatApi.deletePerson({
      users: [personId],
      chatId: store.getActiveChatId(),
    })
      .then((res: any) => {
        if (res.status === 200) {
          return this.getChatPersons();
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((e: string) => console.log(e));
  }
}

export const chatController = new ChatController();
