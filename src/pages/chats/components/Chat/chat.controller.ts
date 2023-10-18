import { ChatsController } from '../../chats.controller';
import { chatApi, IChangePersonsRequestBody, IFindPersonRequestBody } from './chat.api';
import { store } from '../../../../store/store';
import { EErrorStatuses } from '../../../../components/errorPage/ErrorPage';
import { router } from '../../../../utils/routing/router';
import { EPathMap } from '../../../../utils/routing/model';
import { validateForm } from '../../../../utils/validation';
import { Popup } from '../../../../components/Popup/Popup';
import { popupResponseError } from '../../../../components/Popup/components/PopupResponceError/PopupResponseError';
import { IPerson, IUser } from '../../../../store/model';
import { checkResponse, checkResponseWithErrorStatus } from '../../../../utils/helpers';

class ChatController extends ChatsController {
  public getChatToken(chatId: number) {
    return chatApi.getChatToken(chatId)
      .then(checkResponseWithErrorStatus)
      .then((tokenRes) => store.setToken(tokenRes.token))
      .catch((errorStatus) => {
        if (errorStatus === EErrorStatuses.server) {
          router.go(EPathMap.serverError);
        }
      });
  }

  public findPersonByLogin(data: IFindPersonRequestBody) {
    return chatApi.findPersonByLogin(data)
      .then(checkResponse)
      .then((personData) => {
        const identicalLoginPerson = personData
          .find((person: IUser) => person.login === data.login);
        if (identicalLoginPerson) {
          return {
            users: [identicalLoginPerson.id],
            chatId: store.getActiveChatId()
          } as IChangePersonsRequestBody;
        }
        return Promise.reject(`No such person with login ${data.login}. Try another one?`);
      });
  }

  public getChatPersons() {
    return chatApi.getChatPersons(store.getActiveChatId())
      .then(checkResponse)
      .then((persons: IPerson[]) => store.setChatPersons(persons));
  }

  public addPerson(form: HTMLFormElement) {
    const {
      isValidForm,
      filledInputs
    } = validateForm(form);
    // eslint-disable-next-line no-use-before-define
    return isValidForm && chatController.findPersonByLogin(filledInputs as IFindPersonRequestBody)
      .then((body) => chatApi.addPerson(body))
      .then(checkResponse)
      .then(() => {
        Popup.hide();
        // eslint-disable-next-line no-use-before-define
        return chatController.getChatPersons();
      })
      .catch((e) => popupResponseError.setError(e));
  }

  public deletePerson(personId: number) {
    chatApi.deletePerson({
      users: [personId],
      chatId: store.getActiveChatId(),
    })
      .then(checkResponse)
      .then(() => this.getChatPersons())
      .catch((e: string) => console.log(e));
  }
}

export const chatController = new ChatController();
