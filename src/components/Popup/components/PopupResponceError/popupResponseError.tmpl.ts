import './PopupResponseError.less';

export interface IResponseError {
  error?: string
}

// language=html
export const popupResponseErrorTmpl = ({ error = '' }: IResponseError): string => `
  <p class="form-error ${!!error && 'form-error_visible'}">${error}</p>
`;
