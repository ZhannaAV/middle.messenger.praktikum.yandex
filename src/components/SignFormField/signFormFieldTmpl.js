import './SignFormField.less';
import {errors} from "../../constants/errorConfig";

export const signFormFieldTmpl = ({label, name, type, isRequired, isError}) => `
            <label htmlFor=${name} class='field__label'>${label}</label>
            <input id=${name} class="field__input field__input_type_${name}"
                   type=${type}
                   name=${name}
                   ${isRequired && "required"}>
            <span class="field__input-error ${isError && "field__input-error_visible"}">${errors[name]}</span>
`