import { chat } from './components/Chat/Chat';
import { ChatTag } from './components/ChatTag/ChatTag';
import { Block } from '../../utils/block';
import { IChildren, TEvent } from '../../models/models';
import { templator } from '../../utils/templator';
import { chatsTmpl } from './chats.tmpl';
import { chatsController } from './chats.controller';
import { store, EStoreEvents } from '../../store/store';
import { Popup } from '../../components/Popup/Popup';
import { EPopupForms } from '../../components/Popup/constants/popupFormsConfig';

export class Chats extends Block<IChildren> {
  constructor(props: IChildren) {
    super(props);
    chatsController.getChats();
    store.on(EStoreEvents.ChatsUpdated, () => {
      this.setProps({
        children: {
          chats: store.getChats()
            .map((item) => new ChatTag({
              ...item,
              isActive: item.id === store.getActiveChatId()
            })),
          chat
        }
      });
    });
  }

  protected manageChatsMenu(e: TEvent): void {
    const menu = document.querySelector('.layout__menu');
    const toggleMenu = () => menu && menu.classList.toggle('layout__menu_opened');

    if (e.target.id === 'layoutMenuBtn') {
      toggleMenu();
    }
    if (e.target.id === 'newChat') {
      toggleMenu();
      Popup.setProps({
        formName: EPopupForms.newChat,
        apiMethod: chatsController.createNewChat
      });
      Popup.show();
    }
  }

  init() {
    this.props.events = {
      click: (e: TEvent) => this.manageChatsMenu(e),
    };
  }

  protected render() {
    return templator(chatsTmpl(), this.props.children);
  }
}
