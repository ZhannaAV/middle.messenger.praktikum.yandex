import './Avatar.less';

// language=html
export const avatarTmpl = (avatar) => `
  <button class="avatar">
    <img class="avatar__img ${!avatar && 'avatar__img_default'}" src=${avatar || '/public/logo.svg'}
         alt="avatar">
    <span class="avatar__btn-text">Change avatar</span>
  </button>
`;
