import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { ISignPage, signPageTmpl } from './signPage.tmpl';

export class SignPage extends Block {
  render() {
    const { children, ...params } = this.props;
    return templator(signPageTmpl(params as ISignPage), children);
  }
}
