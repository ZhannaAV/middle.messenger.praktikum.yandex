import { IProfileForm, profileFormTmpl } from './profileForm.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren, IErrorResponse, TEvent } from '../../../../models/models';
import { validateField, validateForm } from '../../../../utils/validation';
import { profileController } from '../../profile.controller';
import { passwordInputFields, profileInputFields } from '../ProfileInputField/ProfileInputField';
import { TProfileRequestData } from '../../profile.api';

type TEditProfileForm = IProfileForm & IChildren & { apiMethod: (data: TProfileRequestData) => Promise<unknown> };

export class ProfileForm extends Block<TEditProfileForm> {
  handleSubmit(e: TEvent<HTMLFormElement>) {
    e.preventDefault();
    const {
      isValidForm,
      filledInputs
    } = validateForm(e.currentTarget);
    if (isValidForm) {
      this.props.apiMethod(filledInputs as TProfileRequestData)
        .catch((err: IErrorResponse) => this.setProps({ error: err.reason }));
    }
  }

  protected init() {
    this.props.events = {
      submit: (e: TEvent<HTMLFormElement>) => this.handleSubmit(e),
      focusout: (e: TEvent<HTMLInputElement>) => validateField(e),
    };
  }

  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(profileFormTmpl(params), children);
  }
}

export const profileEditForm = new ProfileForm({
  apiMethod: profileController.edit,
  children: {
    fields: profileInputFields
  }
});

export const profileChangePasswordForm = new ProfileForm({
  apiMethod: profileController.changePassword,
  children: {
    fields: passwordInputFields
  }
});
