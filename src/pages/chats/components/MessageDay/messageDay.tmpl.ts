import './MessageDay.less';

export interface IMessageDay {
  date: string;
}

// language=html
export const messageDayTmpl = ({ date }: IMessageDay): string => `
  <li class="date-message">
    <h4 class="date-message__title">
      ${date}
    </h4>
    <ul class="date-message__list">
      <div data-messageList></div>
    </ul>
  </li>
`;
