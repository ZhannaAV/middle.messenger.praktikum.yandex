import { ErrorPage } from '../../components/errorPage/ErrorPage';

export class ServerErrorPage extends ErrorPage {
  protected init() {
    this.props = {
      title: '500',
      subTitle: 'We are already fixing',
    };
  }

  protected render(): HTMLElement {
    return new ErrorPage(this.props).getContent();
  }
}
