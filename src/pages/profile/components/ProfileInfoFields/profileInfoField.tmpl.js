import './ProfileInfoFields.less';

export const profileInfoFieldTmpl =(label, value)=> `
    <li class="profile__item">
       <p class="profile__item-name">${label}</p>
       <p class="profile__item-value">${value}</p>
    </li>
`