export enum EPopupForms {
  avatar = 'AvatarForm',
  newChat = 'newChatForm',
  addPerson = 'addPersonForm',
  deletePerson = 'deletePersonForm',
}

interface IPopupFormConfig {
  title: string,
  btnText: string,
  type: string,
  inputName: string,
  label: string,
  specialAttributeTitle: string,
  specialAttributeValue: string,
}

export const popupFormsConfig: Record<string, IPopupFormConfig> = {
  [EPopupForms.avatar]: {
    title: 'Upload file',
    btnText: 'Change',
    type: 'file',
    inputName: 'avatar',
    label: 'Select a file on your computer',
    specialAttributeTitle: 'accept',
    specialAttributeValue: 'image/*'
  },
  [EPopupForms.newChat]: {
    title: 'New chat',
    btnText: 'Add',
    type: 'text',
    inputName: 'title',
    label: 'Title',
    specialAttributeTitle: 'pattern',
    specialAttributeValue: '^[A-Z]+[A-Za-z\\-]*'
  },
  [EPopupForms.addPerson]: {
    title: 'Add person',
    btnText: 'Add',
    type: 'text',
    inputName: 'login',
    label: 'Login',
    specialAttributeTitle: 'pattern',
    specialAttributeValue: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}'
  },
  [EPopupForms.deletePerson]: {
    title: 'Delete person',
    btnText: 'Delete',
    type: 'text',
    inputName: 'login',
    label: 'Login',
    specialAttributeTitle: 'pattern',
    specialAttributeValue: '(?=.*[a-z]|[A-Z])[a-zA-Z0-9\\-_]{3,20}'
  }
};
