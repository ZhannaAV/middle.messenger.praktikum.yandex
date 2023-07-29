import { profileInputFieldTmpl } from './profileInputField.tmpl';
import { Block } from '../../../../utils/block';
import { IFormField } from '../../../../models/models';
import { templator } from '../../../../utils/templator';

export class ProfileInputField extends Block<IFormField> {
  protected render() {
    return templator(profileInputFieldTmpl(this.props));
  }
}
