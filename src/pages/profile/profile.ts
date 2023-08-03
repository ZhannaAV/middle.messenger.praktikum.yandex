import { profileInfoConfig } from './constants/profileInfoConfig';
import { ProfileInfoField } from './components/ProfileInfoFields/ProfileInfoFields';
import { ProfileLayout } from './components/ProfileLayout/ProfileLayout';
import { ProfilePageContent } from './components/ProfilePageContent/ProfilePageContent';

export class ProfilePage extends ProfileLayout {
  init() {
    this.props = {
      children: {
        content: new ProfilePageContent({
          chatName: profileInfoConfig.DisplayName,
          children: {
            fields: [
              new ProfileInfoField({ label: 'Email' }),
              new ProfileInfoField({
                label: 'Login',
                value: 'login'
              }),
              new ProfileInfoField({ label: 'Name' }),
              new ProfileInfoField({ label: 'Surname' }),
              new ProfileInfoField({
                label: 'DisplayName',
                value: 'user'
              }),
              new ProfileInfoField({ label: 'Phone' })
            ]
          }
        })
      }
    };
  }

  render(): HTMLElement {
    return new ProfileLayout(this.props).getContent();
  }
}
