import './Chat.less';
import '../../chats.less';
import { store } from '../../../../store/store';
import { EChatButtons } from '../../models/models';

const getChatTitle = () => store.getChats()
  .find((item) => item.id === store.getActiveChatId())?.title;

// language=html
export const chatTmpl = (): string => `
  <section class="chat">
    <div class="chat__header">
      <div class="chat__header-info">
        <h3 class="chat__name">${getChatTitle() || ''}</h3>
        <div data-personsMenu></div>
      </div>
      <button id=${EChatButtons.chatMenu} class="chat__header-btn" type="button">
        <img src="/Menu_button.svg" alt="menu button">
      </button>
      <menu class="chat__menu menu menu_type_header">
        <button id=${EChatButtons.changeChatAvatar} class="chat__menu-btn" type="button">Change chat avatar</button>
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
      <menu class="chat__menu menu menu_type_attach">
        <button class="chat__menu-btn" type="button">foto/video</button>
        <button class="chat__menu-btn" type="button">file</button>
        <button class="chat__menu-btn" type="button">location</button>
      </menu>
    </form>
  </section>
`;
