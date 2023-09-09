import { ISignForm, signFormTempl } from './signForm.tmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { SignFormField } from '../SignFormField/SignFormField';
import { IChildren, IErrorResponse, TEvent } from '../../models/models';
import { validateField, validateForm } from '../../utils/validation';
import { inputTypeConfig } from '../../constants/inputTypeConfig';
import { ISigninRequestData, ISignupRequestData, signFormApi } from './signForm.api';
import { handleAuthorization, ISignRequestData } from './signForm.controller';

const formSigninConfig = {
  formName: 'signin-form',
  submitBtnText: 'Sign in',
};

const formSignupConfig = {
  formName: 'signup-form',
  submitBtnText: 'Sign up',
};

type TSignForm = ISignForm & IChildren & { apiMethod: (data: ISignRequestData) => Promise<unknown> }

class SignForm extends Block<TSignForm> {
  init() {
    const { apiMethod } = this.props;
    this.props.events = {
      submit: (e: TEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
          isValidForm,
          filledInputs,
          form
        } = validateForm(e.currentTarget);
        if (isValidForm) {
          handleAuthorization(apiMethod, filledInputs as ISigninRequestData | ISignupRequestData, form)
            .catch((err: IErrorResponse) => this.setProps({ error: err.reason }));
        }
      },
      focusout: (e: TEvent<HTMLInputElement>) => validateField(e),
    };
  }

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
  apiMethod: (data: ISigninRequestData) => signFormApi.signin(data),
  children: {
    fields: [
      new SignFormField(inputTypeConfig.login),
      new SignFormField(inputTypeConfig.password),
    ],
  },
});

export const FormSignup: Block = new SignForm({
  ...formSignupConfig,
  apiMethod: (data: ISignupRequestData) => signFormApi.signup(data),
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
});
