import './ProfileForm.less';

export interface IProfileForm {
  formName: string;
  isError: boolean
}

// language=html
export const profileFormTmpl = ({
  formName,
  isError
}: IProfileForm): string => `
  <form class="profile-form" name=${formName}>
    <fieldset class="profile-form__fields">
      <div data-fields></div>
    </fieldset>
    <p class="profile-form__error ${isError && 'profile-form__error-visible'}">Что-то пошло не
      так...</p>
    <button formnovalidate type="submit" class="profile-form__button">Save</button>
  </form>
`;
