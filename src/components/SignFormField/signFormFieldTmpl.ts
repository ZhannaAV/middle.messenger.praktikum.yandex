import './SignFormField.less';
import { errors } from '../../constants/errorConfig';
import { IFormField } from '../../models/models';

// language=html
export const signFormFieldTmpl = ({
  label,
  name,
  type,
  isRequired,
  pattern,
}: IFormField): string => `
  <div class="field">
    <label htmlFor=${name} class='field__label'>${label}</label>
    <input id=${name} class="field__input field__input_type_${name}"
           type=${type}
           name=${name}
           ${isRequired && 'required'}
           pattern=${pattern}>
    <span class="field__input-error">${errors[name]}</span>
  </div>
`;
