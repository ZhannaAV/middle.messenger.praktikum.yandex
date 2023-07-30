import { chatTmpl, IChat } from './chat.tmpl';
import { MessageDay } from '../MessageDay/MessageDay';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { IChildren } from '../../../../models/models';
import { convertData, Message, messages } from '../Message/Message';

type TChat = IChat & IChildren;

export class Chat extends Block<TChat> {
  protected init() {
    this.props.children.messages = [
      new MessageDay({
        date: 'today',
        children: {
          messageList: [
            new Message(convertData(messages[0])),
            new Message(convertData(messages[1])),
            new Message(convertData(messages[2]))
          ]
        }
      })
    ];
  }

  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(chatTmpl(params), children);
  }
}
