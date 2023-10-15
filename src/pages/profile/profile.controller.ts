import { IChangePasswordRequest, IEditProfileRequestData, profileApi } from './profile.api';
import { store } from '../../store/store';
import { router } from '../../utils/routing/router';
import { Popup } from '../../components/Popup/Popup';
import { validateForm } from '../../utils/validation';
import { EPathMap } from '../../utils/routing/model';
import { EErrorStatuses } from '../../components/errorPage/ErrorPage';

class ProfileController {
  public getProfileInfo() {
    profileApi.getInfo()
      .then((res: any) => {
        if (res.status === 200) {
          store.setUser(JSON.parse(res.response));
        }
        if (res.status === 401) {
          return localStorage.setItem('auth', 'false');
        } return Promise.reject(res.status.toString());
      })
      .catch((errorStatus) => {
        if (errorStatus === EErrorStatuses.server) {
          router.go(EPathMap.serverError);
        }
      });
  }

  public logout() {
    profileApi.logout()
      .then((res: any) => {
        if (res.status === 200) {
          store.reset();
          return localStorage.setItem('auth', 'false');
        }
        return Promise.reject(res.status.toString());
      })
      .then(() => router.go(EPathMap.signin))
      .catch((errorStatus) => {
        if (errorStatus === EErrorStatuses.server) {
          router.go(EPathMap.serverError);
        }
      });
  }

  public changeAvatar(form: HTMLFormElement) {
    const body = new FormData(form as HTMLFormElement);
    const { isValidForm } = validateForm(form);
    if (isValidForm) {
      return profileApi.changeAvatar(body)
        .then((res: any) => {
          if (res.status === 200) {
            store.setUser(JSON.parse(res.response));
            return Popup.hide();
          }
          return Promise.reject({ ...JSON.parse(res.response) });
        });
    }
    return false;
  }

  public edit(data: IEditProfileRequestData) {
    return profileApi.edit(data)
      .then((res: any) => {
        if (res.status === 200) {
          store.setUser(JSON.parse(res.response));
          return router.go(EPathMap.profile);
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }

  public changePassword(data: IChangePasswordRequest) {
    return profileApi.changePassword(data)
      .then((res: any) => {
        if (res.status === 200) {
          return router.go(EPathMap.profile);
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }
}

export const profileController = new ProfileController();
