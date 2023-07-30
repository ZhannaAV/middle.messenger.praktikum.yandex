import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { ISignPage, signPageTmpl } from './signPage.tmpl';
import { IChildren } from '../../models/models';

type TSignPage = ISignPage & IChildren;

export class SignPage extends Block<TSignPage> {
  render() {
    const { children, ...params } = this.props;
    return templator(signPageTmpl(params), children);
  }
}
