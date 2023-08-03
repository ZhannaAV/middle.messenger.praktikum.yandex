import { ErrorPage } from '../../components/errorPage/ErrorPage';

export class NotFoundPage extends ErrorPage {
  protected init() {
    this.props = {
      title: '404',
      subTitle: 'Got it wrong',
    };
  }

  protected render(): HTMLElement {
    return new ErrorPage(this.props).getContent();
  }
}
