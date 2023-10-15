import { IMessage, messageTmpl } from './message.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { store } from '../../../../store/store';

const markList: Record<string, string> = {
  hasGet: '/HasGetMark.svg',
  is_read: '/HasReadMark.svg',
};

export const convertData = (obj: Record<string, any>): IMessage => ({
  isIncoming: obj.user_id !== store.getUser().id,
  content: obj.content,
  time: new Date(obj.time)?.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }),
  mark: obj.is_read ? markList.is_read : markList.hasGet,
});

export class Message extends Block<IMessage> {
  protected render() {
    return templator(messageTmpl(this.props));
  }
}
