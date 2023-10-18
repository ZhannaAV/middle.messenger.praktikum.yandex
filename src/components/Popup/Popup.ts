import { IPopup, popupTmpl } from './popup.tmpl';
import { Block } from '../../utils/block';
import { IChildren, IErrorResponse, TEvent } from '../../models/models';
import { templator } from '../../utils/templator';
import { popupResponseError } from './components/PopupResponceError/PopupResponseError';
import { validateField } from '../../utils/validation';

type TPopup = IPopup & IChildren & { apiMethod: (form: HTMLFormElement) => Promise<unknown> }

export class PopupClass extends Block<TPopup> {
  public show() {
    if (this.element) this.element.classList.add('popup_opened');
  }

  public hide() {
    if (this.element) this.element.classList.remove('popup_opened');
    popupResponseError.clearError();
  }

  private handleClose(e: Event) {
    if ((e.target as HTMLButtonElement).name === 'closeBtn') {
      this.hide();
    }
  }

  private handleSubmit(e: TEvent) {
    e.preventDefault();
    const el = e.currentTarget;
    const form = el.querySelector(`#${this.props.formName}`) as HTMLFormElement;
    this.props?.apiMethod(form)
      .catch((err: IErrorResponse) => popupResponseError.setError(err.reason));
  }

  private static handleChangeInputValue(e: TEvent<HTMLInputElement>) {
    validateField(e);
    const input = e.target as HTMLInputElement;
    if (input.type === 'file' && input.previousElementSibling) {
      if (input.files) {
        input.previousElementSibling.textContent = input.files[0].name;
      }
    }
  }

  init() {
    this.props.children = {
      responseError: popupResponseError
    };
    this.props.events = {
      click: (e: TEvent): void => this.handleClose(e),
      change: (e: TEvent<HTMLInputElement>): void => PopupClass.handleChangeInputValue(e),
      submit: (e: TEvent): void => this.handleSubmit(e)
    };
  }

  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(popupTmpl(params), children);
  }
}

export const Popup: Block = new PopupClass();
