import './PersonsMenu.less';
import '../../chats.less';
import { EChatButtons } from '../../models/models';

export interface IPersonsMenu {
  count: number;
}

// language=html
export const personsMenuTmpl = ({
  count
}: IPersonsMenu): string => `
  <div>
    <button id=${EChatButtons.personsMenu} class="persons__btn" type="button">${count || 1} players</button>
    <menu class="persons__menu menu menu_type_persons">
      <ul class="persons__list">
        <div data-persons></div>
      </ul>
      <div class="persons__addPerson">
        add person
        <button id="${EChatButtons.addPerson}" type="button"></button>
      </div>
    </menu>
  </div>
`;
