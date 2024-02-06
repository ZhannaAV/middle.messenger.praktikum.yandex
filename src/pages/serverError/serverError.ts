import { EErrorStatuses, ErrorPage } from '../../components/errorPage/ErrorPage';

export class ServerErrorPage extends ErrorPage {
  protected init() {
    this.props = {
      title: EErrorStatuses.server,
      subTitle: 'We are already fixing',
    };
  }

  protected render(): HTMLElement {
    return new ErrorPage(this.props).getContent();
  }
}
