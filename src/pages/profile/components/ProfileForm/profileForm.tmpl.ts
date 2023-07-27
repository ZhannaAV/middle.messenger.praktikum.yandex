import './ProfileForm.less';

// language=html
export const profileFormTmpl = ({
  fields,
  formName,
  isError,
  isDisabled,
}) => `
  <form class="profile-form" name=${formName}>
    <fieldset class="profile-form__fields">
      ${fields}
    </fieldset>
    <p class="profile-form__error ${isError && 'profile-form__error-visible'}">Что-то пошло не
      так...</p>
    <button type="submit" class="profile-form__button" ${isDisabled && 'disabled'}>Save</button>
  </form>
`;
