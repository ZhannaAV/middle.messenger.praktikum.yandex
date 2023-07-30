import { signFormFieldTmpl } from './signFormFieldTmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { IFormField } from '../../models/models';

export class SignFormField extends Block<IFormField> {
  render() {
    return templator(signFormFieldTmpl(this.props));
  }
}
