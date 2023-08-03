import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';
import { ProfileInputField } from '../../components/ProfileInputField/ProfileInputField';
import { inputTypeConfig } from '../../../../constants/inputTypeConfig';
import { validateField, validateForm } from '../../../../utils/validation';
import { TEvent } from '../../../../models/models';

const passwordProfileFormConfig = {
  formName: 'passwordProfile-profile-form',
  isError: false,
};

export class PasswordProfilePage extends ProfileLayout {
  init() {
    this.props = {
      children: {
        content: new ProfileForm({
          ...passwordProfileFormConfig,
          children: {
            fields: [
              new ProfileInputField({
                ...inputTypeConfig.password,
                label: 'Old passwordProfile'
              }),
              new ProfileInputField(inputTypeConfig.newPassword),
              new ProfileInputField(inputTypeConfig.repeatNewPasswordConfig),
            ]
          },
          events: {
            submit: (e: TEvent) => validateForm(e),
            focusout: (e: TEvent) => validateField(e),
          }
        })
      }
    };
  }

  render(): HTMLElement {
    return new ProfileLayout(this.props).getContent();
  }
}
