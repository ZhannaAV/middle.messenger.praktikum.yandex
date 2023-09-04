import { profileInfoFields } from './components/ProfileInfoFields/ProfileInfoFields';
import { profileLayout, ProfileLayout } from './components/ProfileLayout/ProfileLayout';
import { profilePageContent } from './components/ProfilePageContent/ProfilePageContent';
import { avatar } from './components/Avatar/Avatar';

export class ProfilePage extends ProfileLayout {
  init() {
    profilePageContent.setProps({
      children: {
        fields: profileInfoFields,
      }
    });
    profileLayout.setProps({
      children: {
        content: profilePageContent,
        avatar
      }
    });
  }

  render(): HTMLElement {
    return profileLayout.getContent();
  }
}
