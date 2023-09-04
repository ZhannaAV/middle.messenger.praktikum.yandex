import { router } from '../../utils/routing/router';
import { ISigninRequestData, ISignupRequestData } from './signForm.api';

export type ISignRequestData = ISignupRequestData | ISigninRequestData

export function handleAuthorization(
  apiMethod: (data) => Promise<unknown>,
  data: ISignRequestData,
  form: HTMLFormElement
) {
  return apiMethod(data)
    .then((res: any) => {
      if (res.status === 200) {
        router.go('/chats');
        return form.reset();
      }
      return Promise.reject({ ...JSON.parse(res.response) });
    });
}
