import './Message.less';

// language=html
export const messageTmpl = ({isIncoming, text, time, mark}) => `
    <li class="message ${isIncoming ? "message_location_left" : "message_location_right"}">
        <p class="message__text">${text}</p>
        <div class="message__teh-info">
           ${isIncoming ? "" : `<img src=${mark} alt="mark" class="message__mark">`} 
         <span class="message__time">${time}</span>
        </div>
    </li>
`