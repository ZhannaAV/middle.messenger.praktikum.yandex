import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { personTmpl } from './person.tmpl';
import { TEvent } from '../../../../models/models';
import { EChatButtons } from '../../models/models';
import { chatController } from '../Chat/chat.controller';

export class Person extends Block {
  protected manage(e: TEvent): void {
    if (e.target.id === EChatButtons.deletePerson) {
      console.log(this.props.id);
      chatController.deletePerson(this.props.id);
    }
  }

  protected init() {
    this.props.events = {
      click: (e: TEvent) => this.manage(e),
    };
  }

  protected render() {
    return templator(personTmpl(this.props));
  }
}
