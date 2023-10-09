import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IPersonsMenu, personsMenuTmpl } from './personsMenu.tmpl';
import { IChildren, TEvent } from '../../../../models/models';
import { store, StoreEvents } from '../../../../store/store';
import { EChatButtons } from '../../models/models';
import { toggleMenu } from '../../utils/utils';
import { Person } from '../Person/Person';
import { Popup } from '../../../../components/Popup/Popup';
import { EPopupForms } from '../../../../components/Popup/constants/popupFormsConfig';
import { chatController } from '../Chat/chat.controller';

type TPersonsMenu = IPersonsMenu & IChildren;

class PersonsMenu extends Block<TPersonsMenu> {
  constructor(props: Partial<TPersonsMenu>) {
    super(props);
    store.on(StoreEvents.ChatPersonsUpdated, () => {
      const persons = store.getChatPersons();
      this.setProps({
        count: persons.length,
        children: {
          persons: persons.map((item) => new Person({ ...item }))
        }
      });
    });
  }

  protected manage(e: TEvent): void {
    const menu = document.querySelector('.menu_type_persons');
    switch (e.target.id) {
      case EChatButtons.addPerson:
        Popup.setProps({
          formName: EPopupForms.addPerson,
          apiMethod: chatController.addPerson
        });
        toggleMenu(menu);
        Popup.show();
        break;
      default:
        toggleMenu(menu);
    }
  }

  protected init() {
    this.props.events = {
      click: (e: TEvent) => this.manage(e),
    };
  }

  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(personsMenuTmpl(params), children);
  }
}

export const personsMenu = new PersonsMenu({});
