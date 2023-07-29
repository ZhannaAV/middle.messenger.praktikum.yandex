import { IPopup, popupTmpl } from './popup.tmpl';
import { Block } from '../../utils/block';
import { IChildren } from '../../models/models';
import { templator } from '../../utils/templator';

type TPopup = IPopup & IChildren

export class PopupClass extends Block<TPopup> {
  public show() {
    this.element.classList.add('popup_opened');
  }

  public hide() {
    this.element.classList.remove('popup_opened');
  }

  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(popupTmpl(params), children);
  }
}

export const Popup: Block = new PopupClass({
  title: '',
  formName: '',
  btnText: '',
  children: {},
  events: {
    click: (e): void => {
      if (e.target.name === 'closeBtn') {
        Popup.hide();
      }
    }
  }
});
