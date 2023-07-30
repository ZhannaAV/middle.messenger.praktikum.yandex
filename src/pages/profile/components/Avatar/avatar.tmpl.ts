import './Avatar.less';

// language=html
export const avatarTmpl = (): string => `
  <button class="avatar">
    <img class="avatar__img" src='/public/logo.svg'
         alt="avatar">
    <span class="avatar__btn-text">Change avatar</span>
  </button>
`;
