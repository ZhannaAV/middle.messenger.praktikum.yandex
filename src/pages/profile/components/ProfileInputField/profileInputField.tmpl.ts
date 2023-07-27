import './ProfileInputField.less';
import { errors } from '../../../../constants/errorConfig';

// language=html
export const profileInputFieldTmpl = ({
  value,
  name,
  label,
  type,
  isRequired,
  isError,
}) => `
  <div class="profile-field">
    <label htmlFor=${name} class='profile-field__label'>${label}</label>
    <input id=${name} class="profile-field__input profile-field__input_type_${name}"
           type=${type}
           name=${name}
           ${isRequired && 'required'}
           value=${value}>
  </div>
  <span
    class="profile-field__input-error ${isError && 'profile-field__input-error_visible'}">
    ${errors[name]}</span>
`;
