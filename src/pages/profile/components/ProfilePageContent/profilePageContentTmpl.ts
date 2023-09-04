import './ProfilePageContent.less';

export interface IProfile {
  display_name: string;
}

/* eslint-disable camelcase */
// language=html
export const profilePageContentTmpl = ({ display_name }: IProfile): string => `
  <div>
    <h2 class="profile__title">${display_name || ''}</h2>
    <ul class="profile__info">
      <div data-fields></div>
    </ul>
    <div class="profile__elements">
      <a href="/profile/edit" class="profile__element profile__element_type_link">Edit</a>
      <a href="/profile/password" class="profile__element profile__element_type_link">Change password</a>
      <button id="logout" class="profile__element profile__element_type_btn">Logout</button>
    </div>
  </div>
`;
