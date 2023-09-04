import './Chat.less';
import { store } from '../../../../store/store';

export enum EChatButtons {
  chatMenu = 'chatMenuBtn',
  addAttachmentMenu = 'addAttachmenMenutBtn',
  deleteChat = 'deleteChatBtn',
  changeChatAvatar = 'changeChatAvatarBtn',
  addPerson = 'addPersonBtn',
  deletePerson = 'deletePersonBtn'
}
const getChatTitle = () => store.getState().chats.find((item) => item.id === store.getState().activeChatId)?.title;

// language=html
export const chatTmpl = (): string => `
  <section class="chat">
    <div class="chat__header">
      <h3 class="chat__name">${getChatTitle() || ''}</h3>
      <button id=${EChatButtons.chatMenu} class="chat__header-btn">
        <img src="/Menu_button.svg" alt="menu button">
      </button>
      <menu class="chat__menu chat__menu_type_header">
        <button id=${EChatButtons.changeChatAvatar} class="chat__menu-btn" type="button">Change chat avatar</button>
        <button id=${EChatButtons.addPerson} class="chat__menu-btn" type="button">Add person</button>
        <button id=${EChatButtons.deletePerson} class="chat__menu-btn" type="button">Delete person</button>
        <button id=${EChatButtons.deleteChat} class="chat__menu-btn chat__menu-btn_type_warning"
                type="button">Delete chat
        </button>
      </menu>
    </div>
    <ul class="chat__content">
      <div data-messages></div>
    </ul>
    <form class="chat__form" name="chat">
      <button id=${EChatButtons.addAttachmentMenu} class="chat__attach-btn" type="button">
        <img src="/Attach_button.svg" alt="attach button">
      </button>
      <input placeholder="Text message..." class="chat__input" type="text" name="message">
      <button class="chat__submit-btn" type="submit">
        <img src="/Arrow_right.svg" alt="send button">
      </button>
      <menu class="chat__menu chat__menu_type_attach">
        <button class="chat__menu-btn" type="button">foto/video</button>
        <button class="chat__menu-btn" type="button">file</button>
        <button class="chat__menu-btn" type="button">location</button>
      </menu>
    </form>
  </section>
`;
