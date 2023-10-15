import { router } from '../../utils/routing/router';
import { ISigninRequestData, ISignupRequestData } from './signForm.api';
import { EPathMap } from '../../utils/routing/model';

export type ISignRequestData = ISignupRequestData | ISigninRequestData

export function handleAuthorization(
  apiMethod: (data: ISignRequestData) => Promise<unknown>,
  data: ISignRequestData,
  form: HTMLFormElement
) {
  return apiMethod(data)
    .then((res: any) => {
      if (res.status === 200) {
        return localStorage.setItem('auth', 'true');
      }
      return Promise.reject({ ...JSON.parse(res.response) });
    })
    .then(() => {
      router.go(EPathMap.chats);
      return form.reset();
    });
}
