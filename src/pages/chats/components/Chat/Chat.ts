import { chatTmpl } from './chat.tmpl';
import { ChatList } from '../ChatTag/ChatTag';
import { MessageDay } from '../MessageDay/MessageDay';

const activeChat = ChatList.find((item) => item.isActive === true);

export const Chat = chatTmpl(activeChat.chatTitle, MessageDay);

export function manageChat(openPopup) {
  const menuBtn = document.querySelector('.chat__header-btn');
  const attachMenuBtn = document.querySelector('#attachBtn');
  const menu = document.querySelector('.chat__menu_type_header');
  const attachMenu = document.querySelector('.chat__menu_type_attach');
  const menuAddUserBtn = document.querySelector('#addUser');
  const menuRemoveUserBtn = document.querySelector('#removeUser');

  function toggleMenu() {
    menu.classList.toggle('chat__menu_opened');
  }

  function toggleAttachMenu() {
    attachMenu.classList.toggle('chat__menu_opened');
  }

  menuBtn.addEventListener('click', toggleMenu);
  attachMenuBtn.addEventListener('click', toggleAttachMenu);
  menuAddUserBtn.addEventListener('click', () => {
    toggleMenu();
    openPopup();
  });
  menuRemoveUserBtn.addEventListener('click', () => {
    toggleMenu();
    openPopup();
  });
}
