import { profileChangePasswordForm } from '../../components/ProfileForm/ProfileForm';
import { profileLayout, ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';
import { avatar } from '../../components/Avatar/Avatar';

export class PasswordProfilePage extends ProfileLayout {
  init() {
    profileLayout.setProps({
      children: {
        content: profileChangePasswordForm,
        avatar
      }
    });
  }

  render(): HTMLElement {
    return profileLayout.getContent();
  }
}
