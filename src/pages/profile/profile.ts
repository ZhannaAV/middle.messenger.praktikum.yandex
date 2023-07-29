import { IProfile, profileTmpl } from './profile.tmpl';
import { profileInfoConfig } from './constants/profileInfoConfig';
import { ProfileLayout } from './components/ProfileLayout/ProfileLayout';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { IChildren } from '../../models/models';
import { ProfileInfoField } from './components/ProfileInfoFields/ProfileInfoFields';

type TProfile = IProfile & IChildren;

class Profile extends Block<TProfile> {
  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(profileTmpl(params), children);
  }
}

export const ProfilePage: Block = new ProfileLayout({
  children: {
    content: new Profile({
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
});
