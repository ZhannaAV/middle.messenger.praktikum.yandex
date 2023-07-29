import { profileLayoutTmpl } from './profileLayout.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren } from '../../../../models/models';
import { Avatar } from '../Avatar/Avatar';
import { Popup } from '../../../../components/Popup/Popup';

export class ProfileLayout extends Block<IChildren> {
  init() {
    this.props.children.avatar = new Avatar({
      events: {
        click: () => Popup.show()
      }
    });
  }

  render() {
    return templator(profileLayoutTmpl(), this.props.children);
  }
}
