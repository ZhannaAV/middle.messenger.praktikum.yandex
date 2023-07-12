import './Avatar.less';
import Union from '../../../../../public/Union.svg'

export const avatarTmpl = (avatar) => `
<button class="avatar">
    <img class="avatar__img ${!avatar && "avatar__img_default" }" src=${avatar || Union}  alt="avatar">
    <span class="avatar__btn-text">Change avatar</span>
</button>
`