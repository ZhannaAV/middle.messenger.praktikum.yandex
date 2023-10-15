import { profileEditForm } from '../../components/ProfileForm/ProfileForm';
import { profileLayout, ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';
import { avatar } from '../../components/Avatar/Avatar';

export class EditProfilePage extends ProfileLayout {
  init() {
    profileLayout.setProps({
      children: {
        content: profileEditForm,
        avatar
      }
    });
  }

  render(): HTMLElement {
    return profileLayout.getContent();
  }
}
