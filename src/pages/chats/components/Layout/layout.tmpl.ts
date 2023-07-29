import './Layout.less';

// language=html
export const layoutTmpl = (): string => `
  <main class="layout">
    <aside class="layout__sidebar">
      <div class="layout__sidebar-top">
        <a class="layout__profile-link" href="/profile">Profile</a>
        <input class="layout__search-input" name="search" type="text" placeholder="Search">
      </div>
      <ul class="layout__sidebar-content">
        <div data-chats></div>
      </ul>
    </aside>
    <div data-chat>
  </main>
`;
