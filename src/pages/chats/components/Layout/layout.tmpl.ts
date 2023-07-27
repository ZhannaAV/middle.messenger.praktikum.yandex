import './Layout.less';

export const layoutTmpl = (chats, chat) => `
<main class="layout">
    <aside class="layout__sidebar">
        <div class="layout__sidebar-top">
            <a class="layout__profile-link" href="/profile">Profile</a>
            <input class="layout__search-input" name="search" type="text" placeholder="Search">
         </div>
         <ul class="layout__sidebar-content">
             ${chats}
         </ul>
    </aside>
        ${chat}  
</main>
`;
