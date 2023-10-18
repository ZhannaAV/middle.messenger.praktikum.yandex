import './Person.less';
import { rootUrl } from '../../../../utils/api/rootUrl';
import { IPerson } from '../../../../store/model';
import { EChatButtons } from '../../models/models';

// language=html
export const personTmpl = ({
  id,
  avatar,
  display_name: displayName,
  role
}: IPerson): string => `
  <li key=${id} class="person">
    <img class="person__avatar" src=${avatar ? `${rootUrl}/resources${avatar}` : '/logo.svg'}
         alt="person avatar">
    <p class="person__name">${displayName}</p>
    ${role !== 'admin' ? `<button id=${EChatButtons.deletePerson} class="person__delete-btn" type="button"></button>` : '<span class="person__role">admin</span>'}
  </li>
`;
