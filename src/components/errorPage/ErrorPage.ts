import { Block } from '../../utils/block';
import { errorPageTmpl, IErrorPage } from './errorPage.tmpl';
import { templator } from '../../utils/templator';

export enum EErrorStatuses {
  server = '500',
  authorisation = '401',
  notFound = '404'
}

export class ErrorPage extends Block<IErrorPage> {
  protected render() {
    return templator(errorPageTmpl(this.props));
  }
}
