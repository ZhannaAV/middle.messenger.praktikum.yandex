import { chatTagTmpl } from './chatTag.tmpl';

export const ChatList = [
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

export const ChatTagList = ChatList.reduce((acc, item) => acc + chatTagTmpl(item), '');
