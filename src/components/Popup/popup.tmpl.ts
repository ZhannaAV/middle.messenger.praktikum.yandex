import './Popup.less';
import { popupFormsConfig } from './constants/popupFormsConfig';
import { errors } from '../../constants/errorConfig';

export interface IPopup {
  formName: string;
}

const selectAttribute = (formName: string): string => `${popupFormsConfig[formName]?.specialAttributeTitle}=${popupFormsConfig[formName]?.specialAttributeValue}`;

// language=html
export const popupTmpl = ({
  formName
}: IPopup): string => `
  <section id="popup" class="popup">
    <form id=${formName} class="popup__form">
      <h2 class="popup__title">${popupFormsConfig[formName]?.title}</h2>
      <div>
        <label for=${popupFormsConfig[formName]?.type} class="popup__label">
          ${popupFormsConfig[formName]?.label}
        </label>
        <input id=${popupFormsConfig[formName]?.type}
               type=${popupFormsConfig[formName]?.type}
               name=${popupFormsConfig[formName]?.inputName}
               required
               ${selectAttribute(formName)}>
        <span class="popup__input-error">${errors[popupFormsConfig[formName]?.inputName]}</span>
      </div>
      <div>
        <div data-responseError></div>
        <button formnovalidate class="popup__submit-btn" type="submit">${popupFormsConfig[formName]?.btnText}</button>
      </div>
      <button name="closeBtn" class="popup__close-btn" type="button" aria-label="закрыть окно"></button>
    </form>
  </section>
`;
