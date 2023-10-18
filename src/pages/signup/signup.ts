import { FormSignup } from '../../components/SignForm/SignForm';
import { Header } from '../../components/Header/Header';
import { ISignPage } from '../../components/SignPage/signPage.tmpl';
import { SignPage } from '../../components/SignPage/SignPage';
import { EPathMap } from '../../utils/routing/model';

const config: ISignPage = {
  title: 'Welcome!',
  signText: 'Have already registered?',
  linkTo: EPathMap.signin,
  textLink: 'Sign in',
};

export class SignupPage extends SignPage {
  protected init() {
    this.props = {
      ...config,
      children: {
        header: new Header({ place: 'place_sign' }),
        form: FormSignup,
      },
    };
  }

  render(): HTMLElement {
    return new SignPage(this.props).getContent();
  }
}
