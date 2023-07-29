import './profile.less';

export interface IProfile {
  chatName: string;
}

// language=html
export const profileTmpl = ({ chatName }: IProfile): string => `
  <div>
    <h2 class="profile__title">${chatName}</h2>
    <ul class="profile__info">
      <div data-fields></div>
    </ul>
    <div class="profile__elements">
      <a href="/profile/edit" class="profile__element profile__element_type_link">Edit</a>
      <a href="/profile/changePassword" class="profile__element profile__element_type_link">Change
        password</a>
      <button class="profile__element profile__element_type_btn">Logout</button>
    </div>
  </div>
`;
