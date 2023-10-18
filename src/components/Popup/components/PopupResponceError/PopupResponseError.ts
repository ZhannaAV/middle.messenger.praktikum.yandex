import { Block } from '../../../../utils/block';
import { IResponseError, popupResponseErrorTmpl } from './popupResponseError.tmpl';
import { templator } from '../../../../utils/templator';

class PopupResponseError extends Block<IResponseError> {
  public setError(error:string) {
    this.setProps({ error });
  }

  public clearError() {
    this.setProps({ error: '' });
  }

  protected render() {
    return templator(popupResponseErrorTmpl(this.props));
  }
}

export const popupResponseError = new PopupResponseError();
