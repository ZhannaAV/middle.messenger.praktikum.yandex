import './SignForm.less';

export interface ISignForm {
  formName: string;
  submitBtnText: string;
  error?: string;
}

// language=html
export const signFormTempl = ({
  formName,
  submitBtnText,
  error = '',
}: ISignForm): string => `
  <form class="sign-form" name=${formName}>
    <fieldset class="sign-form__fields">
      <div data-fields></div>
    </fieldset>
    <p class="sign-form__error ${!!error && 'sign-form__error-visible'}">${error}</p>
    <button formnovalidate type="submit" class="sign-form__button">
      ${submitBtnText}
    </button>
  </form>
`;
