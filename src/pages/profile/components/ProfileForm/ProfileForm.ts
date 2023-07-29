import { IProfileForm, profileFormTmpl } from './profileForm.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren } from '../../../../models/models';

type TEditProfileForm = IProfileForm & IChildren;

export class ProfileForm extends Block<TEditProfileForm> {
  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(profileFormTmpl(params), children);
  }
}
