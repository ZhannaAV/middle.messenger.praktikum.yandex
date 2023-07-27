import { EditProfileForm } from '../../components/ProfileForm/ProfileForm';
import {
  DisplayNameProfileInputField,
  EmailProfileInputField,
  LoginProfileInputField,
  NameProfileInputField,
  PhoneProfileInputField,
  SurnameProfileInputField,
} from '../../components/ProfileInputField/ProfileInputField';
import { ProfileLayout } from '../../components/ProfileLayout/ProfileLayout';

const editProfileFields = `
${EmailProfileInputField}
${LoginProfileInputField}
${NameProfileInputField}
${SurnameProfileInputField}
${DisplayNameProfileInputField}
${PhoneProfileInputField}
`;

const editProfileContent = `
${EditProfileForm(editProfileFields)}
`;

export const EditProfile = ProfileLayout(editProfileContent);
