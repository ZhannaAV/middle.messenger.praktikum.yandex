import { router } from '../../utils/routing/router';
import { ISigninRequestData, ISignupRequestData } from './signForm.api';
import { EPathMap } from '../../utils/routing/model';
import { checkResponse } from '../../utils/helpers';

export type ISignRequestData = ISignupRequestData | ISigninRequestData

export function handleAuthorization(
  apiMethod: (data: ISignRequestData) => Promise<unknown>,
  data: ISignRequestData,
  form: HTMLFormElement
) {
  return apiMethod(data)
    .then(checkResponse)
    .then(() => localStorage.setItem('auth', 'true'))
    .then(() => {
      router.go(EPathMap.chats);
      return form.reset();
    });
}
