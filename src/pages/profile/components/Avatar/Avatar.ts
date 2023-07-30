import { avatarTmpl } from './avatar.tmpl';
import { Block } from '../../../../utils/block';
import { IEvents } from '../../../../models/models';
import { templator } from '../../../../utils/templator';

export class Avatar extends Block<IEvents> {
  render() {
    return templator(avatarTmpl());
  }
}
