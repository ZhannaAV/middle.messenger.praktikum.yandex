import './Avatar.less';
import { rootUrl } from '../../../../utils/api/rootUrl';

export interface IAvatar {
  avatar?: string
}

// language=html
export const avatarTmpl = ({ avatar = '' }: IAvatar): string => `
  <button class="avatar">
    <img class="avatar__img" src=${avatar ? `${rootUrl}/resources${avatar}` : '/logo.svg'}
         alt="avatar">
    <span class="avatar__btn-text">Change avatar</span>
  </button>
`;
