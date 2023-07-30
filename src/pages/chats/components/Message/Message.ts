import { IMessage, messageTmpl } from './message.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';

export const messages = [
  {
    text: 'Hello!',
    time: '16:01',
    isIncoming: false,
    status: 'hasRead',
  },
  {
    text: 'Ut pulvinar eleifend sollicitudin. Praesent vestibulum ac mi et aliquam. Sed sollicitudin purus nisi, nec sagittis ipsum porta eu. Curabitur vel cursus erat. Morbi dignissim non elit eu rutrum. Etiam non mi mauris. Nam nibh velit, sollicitudin in accumsan sed, venenatis vel ante. Integer tincidunt orci eu augue placerat, ac dapibus ante dignissim. Morbi vitae velit eget mauris fermentum volutpat id eget nisi.',
    time: '16:02',
    isIncoming: true,
    status: null,
  },
  {
    text: 'Go dancing',
    time: '16:05',
    isIncoming: false,
    status: 'hasGet',
  },
];

const markList: Record<string, string> = {
  hasGet: '/public/HasGetMark.svg',
  hasRead: '/public/HasReadMark.svg',
};

export const convertData = (obj: Record<string, any>): IMessage => ({
  isIncoming: obj.isIncoming,
  text: obj.text,
  time: obj.time,
  mark: obj.status && markList[obj.status],
});

export class Message extends Block<IMessage> {
  protected render() {
    return templator(messageTmpl(this.props));
  }
}
