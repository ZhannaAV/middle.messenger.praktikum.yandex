import './SignFormField.less';
import { errors } from '../../constants/errorConfig';

interface ISignFormField {
  label: string;
  name: string;
  type: string;
  isRequired: boolean;
  isError: boolean;
}

// language=html
export const signFormFieldTmpl = ({
  label,
  name,
  type,
  isRequired,
  isError,
}: ISignFormField): string => `
  <div class="field">
    <label htmlFor=${name} class='field__label'>${label}</label>
    <input id=${name} class="field__input field__input_type_${name}"
           type=${type}
           name=${name}
           ${isRequired && 'required'}>
    <span class="field__input-error ${isError && 'field__input-error_visible'}">${errors[name]}</span>
  </div>
`;
