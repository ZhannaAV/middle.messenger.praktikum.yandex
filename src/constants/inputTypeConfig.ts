import { IFormField } from '../models/models';
import { profileInfoConfig } from '../pages/profile/constants/profileInfoConfig';

export const inputTypeConfig: Record<string, IFormField & { value: string }> = {
  email: {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    isRequired: true,
    value: '',
    pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$',
  },
  login: {
    label: 'Login',
    name: 'login',
    type: 'text',
    isRequired: true,
    value: '',
    pattern: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}',
  },
  name: {
    label: 'Name',
    name: 'first_name',
    type: 'text',
    isRequired: false,
    value: '',
    pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я\\-]*',
  },
  surname: {
    label: 'Surname',
    name: 'second_name',
    type: 'text',
    isRequired: false,
    value: '',
    pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я\\-]*',
  },
  phone: {
    label: 'Phone number',
    name: 'phone',
    type: 'tel',
    isRequired: false,
    value: '',
    pattern: '^[\\+]?[0-9]{10,15}',
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    isRequired: true,
    value: '',
    pattern: '((?=.*\\d)(?=.*[A-Z]).{8,40})',
  },
  passwordAgain: {
    label: 'Password (again)',
    name: 'password_again',
    type: 'password',
    isRequired: true,
    value: '',
  },
  newPassword: {
    value: '',
    label: 'New passwordProfile',
    name: 'newPassword',
    type: 'password',
    isRequired: true,
    pattern: '((?=.*\\d)(?=.*[A-Z]).{8,40})',
  },
  repeatNewPasswordConfig: {
    value: '',
    label: 'Repeat new passwordProfile',
    name: 'passwordAgain',
    type: 'password',
    isRequired: true,
    pattern: '((?=.*\\d)(?=.*[A-Z]).{8,40})',
  },
  displayNameConfig: {
    value: profileInfoConfig.DisplayName,
    label: 'Display name',
    name: 'display_name',
    type: 'text',
    isRequired: true,
    pattern: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}',
  }
};
