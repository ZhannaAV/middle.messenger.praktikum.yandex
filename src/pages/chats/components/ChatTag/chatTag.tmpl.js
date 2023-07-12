import './ChatTag.less'

// language=html
export const chatTagTmpl = ({
                                chatAvatar,
                                chatTitle,
                                isLastAuthor,
                                lastMessage,
                                lastMessageTime,
                                isActive
                            }) => `
    <li class="tag ${isActive && "tag_active"}">
        <img class="tag__avatar" src=${chatAvatar} alt="avatar">
        <div class="tag__text">
            <h3 class="tag__title">${chatTitle}</h3>
            <p class="tag__last-autor">${isLastAuthor ? "You:" : ""}<span
                class="tag__last-message">${lastMessage}</span></p>
        </div>
        <p class="tag__last-time">${lastMessageTime}</p>
    </li>
`