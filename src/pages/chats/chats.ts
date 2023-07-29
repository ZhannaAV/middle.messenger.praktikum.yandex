import { layoutTmpl } from './components/Layout/layout.tmpl';
import { Chat } from './components/Chat/Chat';
import { ChatTag, ChatTagList } from './components/ChatTag/ChatTag';
import { Block } from '../../utils/block';
import { IChildren } from '../../models/models';
import { templator } from '../../utils/templator';
import { Popup } from '../../components/Popup/Popup';

class Chats extends Block<IChildren> {
  protected manageChat(e): void {
    const menu = document.querySelector('.chat__menu_type_header');
    const attachMenu = document.querySelector('.chat__menu_type_attach');

    const toggleMenu = () => menu.classList.toggle('chat__menu_opened');

    if (e.target.id === 'menuBtn') {
      toggleMenu();
    }
    if (e.target.id === 'attachBtn') {
      attachMenu.classList.toggle('chat__menu_opened');
    }
    if (e.target.id === 'addUser' || e.target.id === 'removeUser') {
      toggleMenu();
      Popup.show();
    }
  }

  protected init() {
    this.props.children.chats = [
      new ChatTag(ChatTagList[0]),
      new ChatTag(ChatTagList[1]),
      new ChatTag(ChatTagList[2]),
    ];

    this.props.children.chat = new Chat({
      chatTitle: ChatTagList.find((item) => item.isActive === true).chatTitle,
      children: {},
      events: {
        submit: (e) => {
          e.preventDefault();
          console.log(e.target.children.message.value);
        },
        click: (e) => this.manageChat(e),
      }
    });
  }

  protected render() {
    return templator(layoutTmpl(), this.props.children);
  }
}

export const ChatsPage: Block = new Chats({ children: {} });
