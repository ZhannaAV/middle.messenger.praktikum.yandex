import './ProfileLayout.less';

export const profileLayoutTmpl = (avatar, content) => `
<main class="profile-layout">
    <aside class="profile-layout__sidebar">
        <a class="profile-layout__back-link" href="/chats">
            <img src="/public/Arrow_left.svg" alt="arrow back">
        </a>
    </aside>
    <section class="profile-layout__content profile">
        ${avatar}
        ${content}
    </section>
</main>
`;
