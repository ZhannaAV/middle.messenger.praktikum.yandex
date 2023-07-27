import { FormSignup } from '../../components/SignForm/SignForm';
import { Header } from '../../components/Header/Header';
import { SignPage } from '../../components/SignPage/SignPage';

const config = {
  title: 'Welcome!',
  signText: 'Have already registered?',
  linkTo: '/signin',
  textLink: 'Sign in',
};

export const SignupPage = new SignPage({
  ...config,
  children: {
    header: new Header({ place: 'place_sign' }).getContent(),
    form: FormSignup,
  },
}).getContent();
