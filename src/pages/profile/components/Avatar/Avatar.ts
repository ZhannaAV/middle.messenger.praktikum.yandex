import { avatarTmpl, IAvatar } from './avatar.tmpl';
import { Block } from '../../../../utils/block';
import { IEvents } from '../../../../models/models';
import { templator } from '../../../../utils/templator';
import { store, EStoreEvents } from '../../../../store/store';
import { Popup } from '../../../../components/Popup/Popup';
import { profileController } from '../../profile.controller';
import { EPopupForms } from '../../../../components/Popup/constants/popupFormsConfig';

type TAvatar = IEvents & IAvatar

export class Avatar extends Block<TAvatar> {
  constructor(props: TAvatar) {
    super(props);

    store.on(EStoreEvents.UserUpdated, () => {
      this.setProps({ avatar: store.getUser().avatar });
    });
  }

  protected init() {
    this.props.events = {
      click: () => {
        Popup.setProps({
          formName: EPopupForms.avatar,
          apiMethod: profileController.changeAvatar
        });
        Popup.show();
      }
    };
  }

  render() {
    return templator(avatarTmpl(this.props));
  }
}

export const avatar = new Avatar({});
