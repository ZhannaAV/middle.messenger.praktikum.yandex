import { IFormField } from '../models/models';

export const inputTypeConfig: Record<string, IFormField> = {
  email: {
    label: 'Email',
    name: 'email',
    type: 'email',
    isRequired: true,
    pattern: '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$',
  },
  login: {
    label: 'Login',
    name: 'login',
    type: 'text',
    isRequired: true,
    pattern: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}',
  },
  name: {
    label: 'Name',
    name: 'first_name',
    type: 'text',
    isRequired: true,
    pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я\\-]*',
  },
  surname: {
    label: 'Surname',
    name: 'second_name',
    type: 'text',
    isRequired: true,
    pattern: '^[A-ZА-Я]+[A-Za-zА-Яа-я\\-]*',
  },
  phone: {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
    isRequired: true,
    pattern: '^[\\+]?[0-9]{10,15}',
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    isRequired: true,
    pattern: '((?=.*\\d)(?=.*[A-Z]).{8,40})',
  },
  passwordAgain: {
    label: 'Password (again)',
    name: 'password_again',
    type: 'password',
    isRequired: true,
  },
  displayName: {
    label: 'Display name',
    name: 'display_name',
    type: 'text',
    isRequired: true,
    pattern: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}',
  }
};
