import { messageTmpl } from './message.tmpl';

const messages = [
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

const markList = {
  hasGet: '/public/HasGetMark.svg',
  hasRead: '/public/HasReadMark.svg',
};

export const messageList = messages.reduce((acc, mess) => acc + messageTmpl({
  isIncoming: mess.isIncoming,
  text: mess.text,
  time: mess.time,
  mark: mess.status && markList[mess.status],
}), '');
