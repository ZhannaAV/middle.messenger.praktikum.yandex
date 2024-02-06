import { chatTmpl } from './chat.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren, TEvent } from '../../../../models/models';
import { Popup } from '../../../../components/Popup/Popup';
import { EStoreEvents, store } from '../../../../store/store';
import { chatsController } from '../../chats.controller';
import { EPopupForms } from '../../../../components/Popup/constants/popupFormsConfig';
import { chatController } from './chat.controller';
import { personsMenu } from '../PersonsMenu/PersonsMenu';
import { EChatButtons } from '../../models/models';
import { toggleMenu } from '../../utils/utils';
import { wsTransport } from '../../../../utils/api/wsTransport';
import { messageDaysList } from '../MessageDaysList/messageDaysList';
import { getMessage } from './utils/helpers';

interface IChat {
  chatId: number;
  token: string;
}

type TChat = IChat & IChildren;

export class Chat extends Block<TChat> {
  constructor(props: Partial<TChat>) {
    super(props);
    store.on(EStoreEvents.ActiveChatIdUpdated, () => {
      if (this.props.chatId !== store.getActiveChatId()) this.setProps({ chatId: store.getActiveChatId() });
      chatController.getChatPersons();
      chatController.getChatToken(store.getActiveChatId());
    });

    store.on(EStoreEvents.TokenUpdated, () => {
      store.clearMessages();
      wsTransport.close()
        .then(() => wsTransport.connect())
        .then(() => {
          wsTransport.getOld();
        });
    });
  }

  protected manageChat(e: TEvent): void {
    const chatMenu = document.querySelector('.menu_type_header');
    const attachMenu = document.querySelector('.menu_type_attach');

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
      messages: messageDaysList || [],
      personsMenu
    };

    this.props.events = {
      submit: (e: TEvent) => {
        e.preventDefault();
        if (getMessage(e.target)) {
          wsTransport.send({
            type: 'message',
            content: getMessage(e.target)
          });
          e.target.reset();
        }
      },
      click: (e: TEvent) => this.manageChat(e),
    };
  }

  protected render() {
    return templator(chatTmpl(), this.props.children);
  }
}

export const chat = new Chat({});
