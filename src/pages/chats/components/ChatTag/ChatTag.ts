import { chatTagTmpl, IChatTagTmpl } from './chatTag.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IEvents } from '../../../../models/models';
import { store, StoreEvents } from '../../../../store/store';

type TChatTag = IChatTagTmpl & IEvents

export class ChatTag extends Block<TChatTag> {
  constructor(props:Partial<TChatTag>) {
    super(props);
    store.on(StoreEvents.ActiveChatIdUpdated, () => {
      this.setProps({ isActive: store.getActiveChatId() === this.props.id });
    });
  }

  init() {
    this.props.events = {
      click: () => store.setActiveChatId(this.props.id)
    };
  }

  protected render() {
    return templator(chatTagTmpl(this.props));
  }
}
