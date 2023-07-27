import './SignForm.less';

export interface ISignForm {
  formName: string;
  submitBtnText: string;
  isDisabled: boolean;
  isError: boolean;
}

// language=html
export const signFormTempl = ({
  formName,
  submitBtnText,
  isDisabled,
  isError,
}: ISignForm): string => `
  <form class="sign-form" name=${formName}>
    <fieldset class="sign-form__fields">
      <div data-fields></div>
    </fieldset>
    <p class="sign-form__error ${isError && 'sign-form__error-visible'}">Что-то пошло не
      так...</p>
    <button type="submit" class="sign-form__button" ${isDisabled && 'disabled'}>
      ${submitBtnText}
    </button>
  </form>
`;
