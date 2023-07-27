import './Popup.less';

// language=html
export const popupTmpl = ({
  title,
  formName,
  btnText,
}) => `
  <section class="popup">
    <form class="popup__form" name=${formName}>
      <h2 class="popup__title">${title}</h2>
      <button class="popup__submit-btn" type="submit">${btnText}</button>
      <button class="popup__close-btn" type="button" aria-label="закрыть окно"></button>
    </form>
  </section>
`;
