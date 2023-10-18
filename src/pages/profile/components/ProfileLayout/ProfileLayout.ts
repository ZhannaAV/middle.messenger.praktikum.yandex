import { profileLayoutTmpl } from './profileLayout.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren } from '../../../../models/models';
import { avatar } from '../Avatar/Avatar';
import { profileController } from '../../profile.controller';

export class ProfileLayout extends Block<IChildren> {
  init() {
    profileController.getProfileInfo();
    this.props.children = { avatar };
  }

  render() {
    return templator(profileLayoutTmpl(), this.props.children);
  }
}

export const profileLayout = new ProfileLayout();
