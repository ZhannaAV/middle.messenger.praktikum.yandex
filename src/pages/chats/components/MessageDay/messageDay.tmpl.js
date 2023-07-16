import './MessageDay.less';

// language=html
export const messageDayTmpl = (date, messageList) => `
<li class="date-message">
    <h4 class="date-message__title">
        ${date}
    </h4>
    <ul class="date-message__list">
        ${messageList}
    </ul>
</li>
`