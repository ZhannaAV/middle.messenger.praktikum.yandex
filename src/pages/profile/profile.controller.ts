import { IChangePasswordRequest, IEditProfileRequestData, profileApi } from './profile.api';
import { store } from '../../store/store';
import { router } from '../../utils/routing/router';
import { Popup } from '../../components/Popup/Popup';
import { validateForm } from '../../utils/validation';

class ProfileController {
  public getProfileInfo() {
    profileApi.getInfo()
      .then((res: any) => {
        if (res.status === 200) {
          store.set('user', JSON.parse(res.response));
          return true;
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((err) => console.log(err));
  }

  public logout() {
    profileApi.logout()
      .then((res: any) => {
        if (res.status === 200) {
          return router.go('/signin');
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      })
      .catch((err) => console.log(err));
  }

  public changeAvatar(form: HTMLFormElement) {
    const body = new FormData(form as HTMLFormElement);
    const { isValidForm } = validateForm(form);
    if (isValidForm) {
      return profileApi.changeAvatar(body)
        .then((res: any) => {
          if (res.status === 200) {
            store.set('user', JSON.parse(res.response));
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
          store.set('user', JSON.parse(res.response));
          return router.go('/profile');
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }

  public changePassword(data: IChangePasswordRequest) {
    return profileApi.changePassword(data)
      .then((res: any) => {
        if (res.status === 200) {
          return router.go('/profile');
        }
        return Promise.reject({ ...JSON.parse(res.response) });
      });
  }
}

export const profileController = new ProfileController();
