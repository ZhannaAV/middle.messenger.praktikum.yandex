import { ISignForm, signFormTempl } from './signForm.tmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { SignFormField } from '../SignFormField/SignFormField';
import { IChildren } from '../../models/models';
import { validateField, validateForm } from '../../utils/validation';
import { inputTypeConfig } from '../../constants/inputTypeConfig';

const formSigninConfig: ISignForm = {
  formName: 'signin-form',
  submitBtnText: 'Sign in',
  isError: false,
};

const formSignupConfig: ISignForm = {
  formName: 'signup-form',
  submitBtnText: 'Sign up',
  isError: false,
};

type TSignForm = ISignForm & IChildren

class SignForm extends Block<TSignForm> {
  render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(signFormTempl(params), children);
  }
}

export const FormSignin: Block = new SignForm({
  ...formSigninConfig,
  children: {
    fields: [
      new SignFormField(inputTypeConfig.login),
      new SignFormField(inputTypeConfig.password),
    ],
  },
  events: {
    submit: (e) => validateForm(e),
    focusout: (e) => validateField(e),
  },
});

export const FormSignup: Block = new SignForm({
  ...formSignupConfig,
  children: {
    fields: [
      new SignFormField(inputTypeConfig.email),
      new SignFormField(inputTypeConfig.login),
      new SignFormField(inputTypeConfig.name),
      new SignFormField(inputTypeConfig.surname),
      new SignFormField(inputTypeConfig.phone),
      new SignFormField(inputTypeConfig.password),
      new SignFormField(inputTypeConfig.passwordAgain),
    ]
  },
  events: {
    submit: (e: Event) => validateForm(e),
    focusout: (e: Event) => validateField(e),
  },
});
