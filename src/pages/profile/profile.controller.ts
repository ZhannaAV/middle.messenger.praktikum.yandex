import { IChangePasswordRequest, IEditProfileRequestData, profileApi } from './profile.api';
import { store } from '../../store/store';
import { router } from '../../utils/routing/router';
import { Popup } from '../../components/Popup/Popup';
import { validateForm } from '../../utils/validation';
import { EPathMap } from '../../utils/routing/model';
import { EErrorStatuses } from '../../components/errorPage/ErrorPage';
import { checkResponse, checkResponseWithErrorStatus } from '../../utils/helpers';
import { IUser } from '../../store/model';

class ProfileController {
  public getProfileInfo() {
    profileApi.getInfo()
      .then(checkResponseWithErrorStatus)
      .then((user: IUser) => store.setUser(user))
      .catch((errorStatus) => {
        if (errorStatus === EErrorStatuses.authorisation) {
          return localStorage.setItem('auth', 'false');
        }
        if (errorStatus === EErrorStatuses.server) {
          return router.go(EPathMap.serverError);
        }
        return false;
      });
  }

  public logout() {
    profileApi.logout()
      .then(checkResponseWithErrorStatus)
      .then(() => {
        store.reset();
        return localStorage.setItem('auth', 'false');
      })
      .then(() => {
        router.go(EPathMap.signin);
      })
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
        .then(checkResponse)
        .then((user: IUser) => {
          store.setUser(user);
          return Popup.hide();
        });
    }
    return false;
  }

  public edit(data: IEditProfileRequestData) {
    return profileApi.edit(data)
      .then(checkResponse)
      .then((user: IUser) => {
        store.setUser(user);
        return router.go(EPathMap.profile);
      });
  }

  public changePassword(data: IChangePasswordRequest) {
    return profileApi.changePassword(data)
      .then(checkResponse)
      .then(() => router.go(EPathMap.profile));
  }
}

export const profileController = new ProfileController();
