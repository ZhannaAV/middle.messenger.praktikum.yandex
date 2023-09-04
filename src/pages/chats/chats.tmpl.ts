import './chats.less';

// language=html
export const chatsTmpl = (): string => `
  <main class="layout">
    <aside class="layout__sidebar">
      <div class="layout__sidebar-top">
        <button id="layoutMenuBtn" class="layout__header-btn">
          <img src="/Menu_button.svg" alt="chats menu button">
        </button>
        <menu class="layout__menu">
          <a class="layout__profile-link" href="/profile">Profile</a>
          <button id="newChat" class="layout__menu-btn" type="button">New chat</button>
        </menu>
        <input class="layout__search-input" name="search" type="text" placeholder="Search">
      </div>
      <ul class="layout__sidebar-content">
        <div data-chats></div>
      </ul>
    </aside>
    <div data-chat>
  </main>
`;
