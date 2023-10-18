import './ProfileForm.less';

export interface IProfileForm {
  formName: string;
  error?: string
}

// language=html
export const profileFormTmpl = ({
  formName,
  error = ''
}: IProfileForm): string => `
  <form class="profile-form" name=${formName}>
    <fieldset class="profile-form__fields">
      <div data-fields></div>
    </fieldset>
    <p class="profile-form__error ${!!error && 'profile-form__error_visible'}">${error}</p>
    <button formnovalidate type="submit" class="profile-form__button">Save</button>
  </form>
`;
