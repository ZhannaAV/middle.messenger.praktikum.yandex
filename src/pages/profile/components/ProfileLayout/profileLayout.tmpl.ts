import './ProfileLayout.less';
import { EPathMap } from '../../../../utils/routing/model';

// language=html
export const profileLayoutTmpl = () => `
  <div id="app">
    <main class="profile-layout">
      <aside class="profile-layout__sidebar">
        <a class="profile-layout__back-link" href=${EPathMap.chats}>
          <img src="/Arrow_left.svg" alt="arrow back">
        </a>
      </aside>
      <section class="profile-layout__content profile">
        <div data-avatar></div>
        <div data-content></divdata-content>
      </section>
    </main>
  </div>>
`;
