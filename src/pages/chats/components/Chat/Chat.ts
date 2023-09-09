import { chatTmpl, EChatButtons } from './chat.tmpl';
import { MessageDay } from '../MessageDay/MessageDay';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren, TEvent } from '../../../../models/models';
import { convertData, Message, messages } from '../Message/Message';
import { Popup } from '../../../../components/Popup/Popup';
import { store, StoreEvents } from '../../../../store/store';
import { chatsController } from '../../chats.controller';
import { EPopupForms } from '../../../../components/Popup/constants/popupFormsConfig';
import { chatController } from './chat.controller';

interface IChat {
  chatId: number;
}

type TChat = IChat & IChildren;

export class Chat extends Block<TChat> {
  constructor(props: Partial<TChat>) {
    super(props);
    store.on(StoreEvents.ActiveChatIdUpdated, () => {
      if (this.props.chatId !== store.getActiveChatId()) this.setProps({ chatId: store.getActiveChatId() });
    });
  }

  protected manageChat(e: TEvent): void {
    const chatMenu = document.querySelector('.chat__menu_type_header');
    const attachMenu = document.querySelector('.chat__menu_type_attach');
    const toggleMenu = (menu: Element | null) => menu && menu.classList.toggle('chat__menu_opened');

    switch (e.target.id) {
      case EChatButtons.deleteChat:
        chatsController.deleteChat(this.props.chatId)
          .finally(() => toggleMenu(chatMenu));
        break;
      case EChatButtons.changeChatAvatar:
        Popup.setProps({
          formName: EPopupForms.avatar,
          apiMethod: chatsController.changeChatAvatar
        });
        toggleMenu(chatMenu);
        Popup.show();
        break;
      case EChatButtons.addPerson:
        Popup.setProps({
          formName: EPopupForms.addPerson,
          apiMethod: chatController.addPerson
        });
        toggleMenu(chatMenu);
        Popup.show();
        break;
      case EChatButtons.deletePerson:
        Popup.setProps({
          formName: EPopupForms.deletePerson,
          apiMethod: chatController.deletePerson
        });
        toggleMenu(chatMenu);
        Popup.show();
        break;
      case EChatButtons.chatMenu:
        toggleMenu(chatMenu);
        break;
      case 'attachBtn':
        if (attachMenu) attachMenu.classList.toggle('chat__menu_opened');
        break;
      default:
        break;
    }
  }

  protected init() {
    this.props.children = {
      messages: [
        new MessageDay({
          date: 'today',
          children: {
            messageList: [
              new Message(convertData(messages[0])),
              new Message(convertData(messages[1])),
              new Message(convertData(messages[2]))
            ]
          }
        })
      ]
    };
    this.props.events = {
      submit: (e: TEvent) => {
        e.preventDefault();
        console.log((e.target.children as any).message.value);
      },
      click: (e: TEvent) => this.manageChat(e),
    };
  }

  protected render() {
    return templator(chatTmpl(), this.props.children);
  }
}

export const chat = new Chat({});
