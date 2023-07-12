import {FormSignup} from "../../components/SignForm/SignForm";
import {HeaderSign} from "../../components/Header/Header";
import {
    SignFormFieldEmail,
    SignFormFieldLogin,
    SignFormFieldName, SignFormFieldPassword, SignFormFieldPasswordAgain, SignFormFieldPhone,
    SignFormFieldSurname
} from "../../components/SignFormField/SignFormField";

const signupFields = `
${SignFormFieldEmail}
${SignFormFieldLogin}
${SignFormFieldName}
${SignFormFieldSurname}
${SignFormFieldPhone}
${SignFormFieldPassword}
${SignFormFieldPasswordAgain}
`

export const Signup = `
${HeaderSign}
${FormSignup(signupFields)}
`