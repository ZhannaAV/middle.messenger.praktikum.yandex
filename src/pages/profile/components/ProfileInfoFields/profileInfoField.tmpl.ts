import './ProfileInfoFields.less';

export interface IProfileInfoField {
  label: string;
  value?: string;
}

// language=html
export const profileInfoFieldTmpl = ({
  label,
  value
}: IProfileInfoField): string => `
  <li class="profile__item">
    <p class="profile__item-name">${label}</p>
    <p class="profile__item-value">${value || ''}</p>
  </li>
`;
