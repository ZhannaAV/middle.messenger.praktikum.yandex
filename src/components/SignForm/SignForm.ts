import { ISignForm, signFormTempl } from './signForm.tmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { fieldTypeConfig, SignFormField } from '../SignFormField/SignFormField';

const formSigninConfig = {
  formName: 'signin-form',
  submitBtnText: 'Sign in',
  isDisabled: false,
  isError: false,
};

const formSignupConfig = {
  formName: 'signup-form',
  submitBtnText: 'Sign up',
  isDisabled: true,
  isError: false,
};

class SignForm extends Block {
  render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(signFormTempl(params as ISignForm), children);
  }
}

export const FormSignin = new SignForm({
  ...formSigninConfig,
  children: {
    fields: [
      new SignFormField(fieldTypeConfig.login).getContent(),
      new SignFormField(fieldTypeConfig.password).getContent(),
    ],
  },
  events: {
    submit: (event) => {
      event.preventDefault();
      const { elements } = event.currentTarget;
      console.log(elements.login.value);
      console.log(elements.password.value);
    },
  },
}).getContent();

export const FormSignup = new SignForm({
  ...formSignupConfig,
  children: {
    fields: [
      new SignFormField(fieldTypeConfig.email).getContent(),
      new SignFormField(fieldTypeConfig.login).getContent(),
      new SignFormField(fieldTypeConfig.name).getContent(),
      new SignFormField(fieldTypeConfig.surname).getContent(),
      new SignFormField(fieldTypeConfig.phone).getContent(),
      new SignFormField(fieldTypeConfig.password).getContent(),
      new SignFormField(fieldTypeConfig.passwordAgain).getContent(),
    ]
  },
  events: {
    submit: (event) => {
      event.preventDefault();
      const { elements } = event.currentTarget;
      console.log(elements.login.value);
    },
  },
}).getContent();
