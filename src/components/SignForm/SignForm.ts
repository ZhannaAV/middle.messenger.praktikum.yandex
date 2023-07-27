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
      new SignFormField(fieldTypeConfig.login),
      new SignFormField(fieldTypeConfig.password),
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
});

export const FormSignup = new SignForm({
  ...formSignupConfig,
  children: {
    fields: [
      new SignFormField(fieldTypeConfig.email),
      new SignFormField(fieldTypeConfig.login),
      new SignFormField(fieldTypeConfig.name),
      new SignFormField(fieldTypeConfig.surname),
      new SignFormField(fieldTypeConfig.phone),
      new SignFormField(fieldTypeConfig.password),
      new SignFormField(fieldTypeConfig.passwordAgain),
    ]
  },
  events: {
    submit: (event) => {
      event.preventDefault();
      const { elements } = event.currentTarget;
      console.log(elements.login.value);
    },
  },
});
