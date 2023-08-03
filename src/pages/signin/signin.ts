import { Header } from '../../components/Header/Header';
import { FormSignin } from '../../components/SignForm/SignForm';
import { SignPage } from '../../components/SignPage/SignPage';
import { ISignPage } from '../../components/SignPage/signPage.tmpl';

const config: ISignPage = {
  title: 'Nice to see you!',
  signText: 'Not registered?',
  linkTo: '/signup',
  textLink: 'Sign up',
};

export class SigninPage extends SignPage {
  protected init() {
    this.props = {
      ...config,
      children: {
        header: new Header({ place: 'place_sign' }),
        form: FormSignin,
      },
    };
  }

  render(): HTMLElement {
    return new SignPage(this.props).getContent();
  }
}
