import { IProfileInfoField, profileInfoFieldTmpl } from './profileInfoField.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';

export class ProfileInfoField extends Block<IProfileInfoField> {
  protected render() {
    return templator(profileInfoFieldTmpl(this.props));
  }
}
