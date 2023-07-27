import { layoutTmpl } from './components/Layout/layout.tmpl';
import { Chat } from './components/Chat/Chat';
import { ChatTagList } from './components/ChatTag/ChatTag';

const Layout = layoutTmpl(ChatTagList, Chat);

export const Chats = `${Layout}`;
