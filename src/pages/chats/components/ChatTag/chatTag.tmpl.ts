import './ChatTag.less';
import { IChatTag } from '../../../../store/model';
import { rootUrl } from '../../../../utils/api/rootUrl';
import { store } from '../../../../store/store';

export interface IChatTagTmpl extends IChatTag {
  isActive?: boolean;
}

const convertDate = (date: string): string => {
  const d = date ? new Date(date) : null;
  const dayWeek = d?.toDateString()
    .split(' ')[0] || '';
  const time = d ? d.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }) : '';
  return `${dayWeek} ${time}`;
};
const checkLastAuthor = (login: string): boolean => store.getUser().login === login;

/* eslint-disable camelcase */
// language=html
export const chatTagTmpl = ({
  avatar,
  title,
  last_message,
  isActive = false,
}: IChatTagTmpl): string => `
  <li class="tag ${isActive && 'tag_active'}">
    <img class="tag__avatar" src=${avatar ? `${rootUrl}/resources${avatar}` : '/logo.svg'} alt="chat avatar">
    <div class="tag__text">
    <div class="tag__header">
      <h3 class="tag__title">${title}</h3>
      <p class="tag__last-time">${convertDate(last_message?.time as string) || ''}</p>
    </div>
    <p class="tag__last-author">${checkLastAuthor(last_message?.user?.login as string) ? 'You: ' : ''}<span
      class="tag__last-message">${last_message?.content || ''}</span></p>
    </div>
  </li>
`;
