import { Header } from '../../components/Header/Header';
import { FormSignin } from '../../components/SignForm/SignForm';
import { SignPage } from '../../components/SignPage/SignPage';

const config = {
  title: 'Nice to see you!',
  signText: 'Not registered?',
  linkTo: '/signup',
  textLink: 'Sign up',
};

export const SigninPage = new SignPage({
  ...config,
  children: {
    header: new Header({ place: 'place_sign' }),
    form: FormSignin,
  },
});
