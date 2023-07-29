import { FormSignup } from '../../components/SignForm/SignForm';
import { Header } from '../../components/Header/Header';
import { SignPage } from '../../components/SignPage/SignPage';
import { Block } from '../../utils/block';
import { ISignPage } from '../../components/SignPage/signPage.tmpl';

const config: ISignPage = {
  title: 'Welcome!',
  signText: 'Have already registered?',
  linkTo: '/signin',
  textLink: 'Sign in',
};

export const SignupPage: Block = new SignPage({
  ...config,
  children: {
    header: new Header({ place: 'place_sign' }),
    form: FormSignup,
  },
});
