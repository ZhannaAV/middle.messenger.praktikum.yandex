import { IProfileInfoField, profileInfoFieldTmpl } from './profileInfoField.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { store, StoreEvents } from '../../../../store/store';

export enum EInfoFields {
  Email = 'email',
  Login = 'login',
  Name = 'first_name',
  Surname = 'second_name',
  'Display name' = 'display_name',
  Phone = 'phone'
}

export class ProfileInfoField extends Block<IProfileInfoField> {
  constructor(props: IProfileInfoField) {
    super(props);

    store.on(StoreEvents.Updated, () => {
      this.setProps({ value: store.getState().user[EInfoFields[this.props.label]] });
    });
  }

  protected render() {
    return templator(profileInfoFieldTmpl(this.props));
  }
}

export const emailInfoField = new ProfileInfoField({ label: 'Email' });
export const loginInfoField = new ProfileInfoField({ label: 'Login' });
export const nameInfoField = new ProfileInfoField({ label: 'Name' });
export const surnameInfoField = new ProfileInfoField({ label: 'Surname' });
export const displayNameInfoField = new ProfileInfoField({ label: 'Display name' });
export const phoneInfoField = new ProfileInfoField({ label: 'Phone' });

export const profileInfoFields = [
  emailInfoField,
  loginInfoField,
  nameInfoField,
  surnameInfoField,
  displayNameInfoField,
  phoneInfoField
];
