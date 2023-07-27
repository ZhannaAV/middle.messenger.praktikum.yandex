import { ChangePasswordProfileForm } from '../../components/ProfileForm/ProfileForm';
import {
  NewPasswordProfileInputField,
  OldPasswordProfileInputField,
  RepeatNewPasswordProfileInputField,
} from '../../components/ProfileInputField/ProfileInputField';
import { ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';

const changePasswordProfileFields = `
${OldPasswordProfileInputField}
${NewPasswordProfileInputField}
${RepeatNewPasswordProfileInputField}
`;

const changePasswordProfileContent = `
${ChangePasswordProfileForm(changePasswordProfileFields)}
`;

export const ChangePassword = ProfileLayout(changePasswordProfileContent);
