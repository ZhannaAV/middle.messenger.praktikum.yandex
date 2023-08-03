import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { ProfileInputField } from '../../components/ProfileInputField/ProfileInputField';
import { inputTypeConfig } from '../../../../constants/inputTypeConfig';
import { validateField, validateForm } from '../../../../utils/validation';
import { TEvent } from '../../../../models/models';
import { ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';

const editProfileConfig = {
  formName: 'edit-profile-form',
  isError: false,
};

export class EditProfilePage extends ProfileLayout {
  init() {
    this.props = {
      children: {
        content: new ProfileForm({
          ...editProfileConfig,
          children: {
            fields: [
              new ProfileInputField(inputTypeConfig.email),
              new ProfileInputField(inputTypeConfig.login),
              new ProfileInputField(inputTypeConfig.name),
              new ProfileInputField(inputTypeConfig.surname),
              new ProfileInputField(inputTypeConfig.displayNameConfig),
              new ProfileInputField(inputTypeConfig.phone)
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
