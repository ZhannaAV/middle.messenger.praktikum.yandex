import { chatTagTmpl, IChatTag } from './chatTag.tmpl';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';

export const ChatTagList = [
  {
    chatAvatar: '/public/logo.svg',
    chatTitle: 'Vadim',
    isLastAuthor: false,
    lastMessage: 'Hi',
    lastMessageTime: '22:49',
    isActive: false,
  },
  {
    chatAvatar: '/public/logo.svg',
    chatTitle: 'Masha',
    isLastAuthor: false,
    lastMessage: 'Good night, see you tomorrow! It\'s been great day',
    lastMessageTime: '00:01',
    isActive: false,
  },
  {
    chatAvatar: '/public/logo.svg',
    chatTitle: 'Jazz-funk',
    isLastAuthor: true,
    lastMessage: 'Go dancing',
    lastMessageTime: '12:46',
    isActive: true,
  },
];

export class ChatTag extends Block<IChatTag> {
  protected render() {
    return templator(chatTagTmpl(this.props));
  }
}
