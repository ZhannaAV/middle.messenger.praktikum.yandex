import { EStoreEvents, store } from '../../../../store/store';
import { templator } from '../../../../utils/templator';
import { messageDaysListTmpl } from './messageDaysList.tmpl';
import { Block } from '../../../../utils/block';
import { MessageDay } from '../MessageDay/MessageDay';
import { convertData, Message } from '../Message/Message';
import { IChildren } from '../../../../models/models';

export class MessageDaysList extends Block<IChildren> {
  constructor(props: Partial<IChildren>) {
    super(props);
    store.on(EStoreEvents.MessagesUpdated, () => {
      this.setProps({
        children: {
          messages: store.getMessages().reverse().map((item) => new MessageDay({
            date: item.day,
            children: {
              messageList: item.list.reverse().map((mes) => new Message(convertData(mes)))
            }
          }))
        }
      });
    });
  }

  protected render() {
    return templator(messageDaysListTmpl(), this.props.children);
  }
}

export const messageDaysList = new MessageDaysList({});
