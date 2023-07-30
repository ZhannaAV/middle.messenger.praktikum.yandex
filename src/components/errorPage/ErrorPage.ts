import { Block } from '../../utils/block';
import { errorPageTmpl, IErrorPage } from './errorPage.tmpl';
import { templator } from '../../utils/templator';

export class ErrorPage extends Block<IErrorPage> {
  protected render() {
    return templator(errorPageTmpl(this.props));
  }
}
