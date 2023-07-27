import { popupTmpl } from './popup.tmpl';

export const Popup = popupTmpl({
  title: '',
  formName: '',
  btnText: '',
});

export function managePopup() {
  const popup = document.querySelector('.popup');
  const closeBtn = popup.querySelector('.popup__close-btn');
  closeBtn.addEventListener('click', () => popup.classList.remove('popup_opened'));

  return () => popup.classList.add('popup_opened');
}
