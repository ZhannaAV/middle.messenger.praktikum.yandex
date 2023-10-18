import { ISignForm, signFormTempl } from './signForm.tmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';
import { SignFormField } from '../SignFormField/SignFormField';
import { IChildren, IErrorResponse, TEvent } from '../../models/models';
import { validateField, validateForm } from '../../utils/validation';
import { inputTypeConfig } from '../../constants/inputTypeConfig';
import { ISigninRequestData, ISignupRequestData, signFormApi } from './signForm.api';
import { handleAuthorization, ISignRequestData } from './signForm.controller';
import { router } from '../../utils/routing/router';
import { EPathMap } from '../../utils/routing/model';

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
            .catch((err: IErrorResponse) => {
              if (err.reason === 'User already in system') {
                localStorage.setItem('auth', 'true');
                return null;
              }
              return err;
            })
            .then((err) => (err ? this.setProps({ error: err.reason }) : router.go(EPathMap.chats)));
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
