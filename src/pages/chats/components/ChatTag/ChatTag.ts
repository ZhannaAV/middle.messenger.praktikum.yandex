import { chatTagTmpl, IChatTagTmpl } from './chatTag.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IEvents } from '../../../../models/models';
import { store, StoreEvents } from '../../../../store/store';
import { EStoreProperty } from '../../../../store/model';

type TChatTag = IChatTagTmpl & IEvents

export class ChatTag extends Block<TChatTag> {
  constructor(props:Partial<TChatTag>) {
    super(props);
    store.on(StoreEvents.ChatsUpdated, () => {
      this.setProps({ isActive: store.getState().activeChatId === this.props.id });
    });
  }

  init() {
    this.props.events = {
      click: () => {
        store.set(EStoreProperty.activeChatId, this.props.id);
      }
    };
  }

  protected render() {
    return templator(chatTagTmpl(this.props));
  }
}
