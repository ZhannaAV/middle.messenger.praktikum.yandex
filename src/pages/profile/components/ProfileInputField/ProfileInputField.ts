import { profileInputFieldTmpl } from './profileInputField.tmpl';
import { Block } from '../../../../utils/block';
import { IFormField } from '../../../../models/models';
import { templator } from '../../../../utils/templator';
import { store, StoreEvents } from '../../../../store/store';
import { inputTypeConfig } from '../../../../constants/inputTypeConfig';

export class ProfileInputField extends Block<IFormField> {
  constructor(props: IFormField) {
    super(props);

    store.on(StoreEvents.UserUpdated, () => {
      this.setProps({ value: store.getUser()[this.props.name] });
    });
  }

  protected render() {
    return templator(profileInputFieldTmpl(this.props));
  }
}

const emailInputField = new ProfileInputField(inputTypeConfig.email);
const loginInputField = new ProfileInputField(inputTypeConfig.login);
const nameInputField = new ProfileInputField(inputTypeConfig.name);
const surnameInputField = new ProfileInputField(inputTypeConfig.surname);
const displayNameInputField = new ProfileInputField(inputTypeConfig.displayName);
const phoneNameInputField = new ProfileInputField(inputTypeConfig.phone);
const oldPasswordInputField = new ProfileInputField({ ...inputTypeConfig.password, label: 'Old password', name: 'oldPassword' });
const newPasswordInputField = new ProfileInputField({ ...inputTypeConfig.password, label: 'New password', name: 'newPassword' });
const repeatNewPasswordInputField = new ProfileInputField({ ...inputTypeConfig.passwordAgain, label: 'Repeat new password' });

export const profileInputFields = [
  emailInputField,
  loginInputField,
  nameInputField,
  surnameInputField,
  displayNameInputField,
  phoneNameInputField
];

export const passwordInputFields = [
  oldPasswordInputField,
  newPasswordInputField,
  repeatNewPasswordInputField
];
