import { IProfileInfoField, profileInfoFieldTmpl } from './profileInfoField.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { store, EStoreEvents } from '../../../../store/store';

export enum ELabel {
  email = 'Email',
  login = 'Login',
  first_name = 'Name',
  second_name = 'Surname',
  display_name = 'Display name',
  phone = 'Phone',
}

export const EInfoFields = {
  [ELabel.email]: 'email',
  [ELabel.login]: 'login',
  [ELabel.first_name]: 'first_name',
  [ELabel.second_name]: 'second_name',
  [ELabel.display_name]: 'display_name',
  [ELabel.phone]: 'phone'
};

export class ProfileInfoField extends Block<IProfileInfoField> {
  constructor(props: IProfileInfoField) {
    super(props);

    store.on(EStoreEvents.UserUpdated, () => {
      this.setProps({ value: store.getUser()[EInfoFields[this.props.label as ELabel]] });
    });
  }

  protected render() {
    return templator(profileInfoFieldTmpl(this.props));
  }
}

export const emailInfoField = new ProfileInfoField({ label: ELabel.email });
export const loginInfoField = new ProfileInfoField({ label: ELabel.login });
export const nameInfoField = new ProfileInfoField({ label: ELabel.first_name });
export const surnameInfoField = new ProfileInfoField({ label: ELabel.second_name });
export const displayNameInfoField = new ProfileInfoField({ label: ELabel.display_name });
export const phoneInfoField = new ProfileInfoField({ label: ELabel.phone });

export const profileInfoFields = [
  emailInfoField,
  loginInfoField,
  nameInfoField,
  surnameInfoField,
  displayNameInfoField,
  phoneInfoField
];
