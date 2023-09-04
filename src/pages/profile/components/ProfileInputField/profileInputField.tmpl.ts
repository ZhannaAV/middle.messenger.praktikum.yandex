import './ProfileInputField.less';
import { errors } from '../../../../constants/errorConfig';
import { IFormField } from '../../../../models/models';

// language=html
export const profileInputFieldTmpl = ({
  value,
  name,
  label,
  type,
  isRequired,
  pattern,
}: IFormField): string => `
  <div class="profile-field">
    <div class="profile-field__wrapper">
      <label htmlFor=${name} class='profile-field__label'>${label}</label>
      <input id=${name} class="profile-field__input profile-field__input_type_${name}"
             type=${type}
             name=${name}
             ${isRequired && 'required'}
             pattern=${pattern}
             value=${value || ''}>
    </div>
    <span class="profile-field__input-error">${errors[name]}</span>
  </div>
`;
