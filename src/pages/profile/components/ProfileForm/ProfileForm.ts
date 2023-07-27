import { profileFormTmpl } from './profileForm.tmpl';

const editProfileConfig = {
  formName: 'edit-profile-form',
  isError: false,
  isDisabled: false,
};

const changePasswordProfileConfig = {
  formName: 'password-profile-form',
  isError: false,
  isDisabled: false,
};

export const EditProfileForm = (fields) => profileFormTmpl({
  ...editProfileConfig,
  fields,
});
export const ChangePasswordProfileForm = (fields) => profileFormTmpl({
  ...changePasswordProfileConfig,
  fields,
});
