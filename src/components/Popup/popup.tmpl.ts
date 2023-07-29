import './Popup.less';

export interface IPopup {
  title: string;
  formName: string;
  btnText: string;
}

// language=html
export const popupTmpl = ({
  title,
  formName,
  btnText,
}: IPopup): string => `
  <section id="popup" class="popup">
    <form class="popup__form" name=${formName}>
      <h2 class="popup__title">${title}</h2>
      <div data-fields></div>
      <button class="popup__submit-btn" type="submit">${btnText}</button>
      <button name="closeBtn" class="popup__close-btn" type="button" aria-label="закрыть окно"></button>
    </form>
  </section>
`;
