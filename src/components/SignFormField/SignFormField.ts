import { signFormFieldTmpl } from './signFormFieldTmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';

export const fieldTypeConfig = {
  email: {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    isRequired: true,
    isError: false,
    value: '',
  },
  login: {
    label: 'Login',
    name: 'login',
    type: 'text',
    isRequired: true,
    isError: false,
    value: '',
  },
  name: {
    label: 'Name',
    name: 'first_name',
    type: 'text',
    isRequired: false,
    isError: false,
    value: '',
  },
  surname: {
    label: 'Surname',
    name: 'second_name',
    type: 'text',
    isRequired: false,
    isError: false,
    value: '',
  },
  phone: {
    label: 'Phone number',
    name: 'phone',
    type: 'tel',
    isRequired: false,
    isError: false,
    value: '',
  },
  password: {
    label: 'Password',
    name: 'password',
    type: 'password',
    isRequired: true,
    isError: false,
    value: '',
  },
  passwordAgain: {
    label: 'Password (again)',
    name: 'password_again',
    type: 'password',
    isRequired: true,
    isError: false,
    value: '',
  },
};

export class SignFormField extends Block {
  render() {
    return templator(signFormFieldTmpl(this.props));
  }
}
