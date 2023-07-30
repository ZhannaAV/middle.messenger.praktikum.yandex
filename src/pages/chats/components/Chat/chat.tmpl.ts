import './Chat.less';

export interface IChat {
  chatTitle: string;
}

// language=html
export const chatTmpl = ({ chatTitle }: IChat): string => `
  <section class="chat">
    <div class="chat__header">
      <h3 class="chat__name">${chatTitle}</h3>
      <button id="menuBtn" class="chat__header-btn">
        <img src="/Menu_button.svg" alt="menu button">
      </button>
      <menu class="chat__menu chat__menu_type_header">
        <button id="addUser" class="chat__menu-btn" type="button">add person</button>
        <button id="removeUser" class="chat__menu-btn" type="button">remove person</button>
        <button id="removeChat" class="chat__menu-btn chat__menu-btn_type_warning"
                type="button">remove chat
        </button>
      </menu>
    </div>
    <ul class="chat__content">
      <div data-messages></div>
    </ul>
    <form class="chat__form" name="chat">
      <button id="attachBtn" class="chat__attach-btn" type="button">
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
