import { IMessageDay, messageDayTmpl } from './messageDay.tmpl';
import { Block } from '../../../../utils/block';
import { IChildren } from '../../../../models/models';
import { templator } from '../../../../utils/templator';

type TMessageDay = IMessageDay & IChildren;

export class MessageDay extends Block<TMessageDay> {
  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(messageDayTmpl(params), children);
  }
}
