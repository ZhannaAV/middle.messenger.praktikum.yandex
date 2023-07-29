import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';
import { Block } from '../../../../utils/block';
import { ProfileInputField } from '../../components/ProfileInputField/ProfileInputField';
import { inputTypeConfig } from '../../../../constants/inputTypeConfig';
import { validateField, validateForm } from '../../../../utils/validation';

const passwordProfileFormConfig = {
  formName: 'passwordProfile-profile-form',
  isError: false,
};

export const PasswordProfilePage: Block = new ProfileLayout({
  children: {
    content: new ProfileForm({
      ...passwordProfileFormConfig,
      children: {
        fields: [
          new ProfileInputField({ ...inputTypeConfig.password, label: 'Old passwordProfile' }),
          new ProfileInputField(inputTypeConfig.newPassword),
          new ProfileInputField(inputTypeConfig.repeatNewPasswordConfig),
        ]
      },
      events: {
        submit: (e) => validateForm(e),
        focusout: (e) => validateField(e),
      }
    })
  }
});
