import {signFormFieldTmpl} from "./signFormFieldTmpl";

const emailParams = {
    label: "E-mail",
    name: "email",
    type: "email",
    isRequired: true,
    isError: false,
    value: ""
}

const loginParams = {
    label: "Login",
    name: "login",
    type: "text",
    isRequired: true,
    isError: false,
    value: ""
}

const nameParams = {
    label: "Name",
    name: "first_name",
    type: "text",
    isRequired: false,
    isError: false,
    value: ""
}

const surnameParams = {
    label: "Surname",
    name: "second_name",
    type: "text",
    isRequired: false,
    isError: false,
    value: ""
}

const phoneParams = {
    label: "Phone number",
    name: "phone",
    type: "tel",
    isRequired: false,
    isError: false,
    value: ""
}

const passwordParams = {
    label: "Password",
    name: "password",
    type: "password",
    isRequired: true,
    isError: false,
    value: ""
}

const passwordAgainParams = {
    label: "Password (again)",
    name: "password_again",
    type: "password",
    isRequired: true,
    isError: false,
    value: ""
}

export const SignFormFieldEmail = signFormFieldTmpl(emailParams)
export const SignFormFieldLogin = signFormFieldTmpl(loginParams)
export const SignFormFieldName = signFormFieldTmpl(nameParams)
export const SignFormFieldSurname = signFormFieldTmpl(surnameParams)
export const SignFormFieldPhone = signFormFieldTmpl(phoneParams)
export const SignFormFieldPassword = signFormFieldTmpl(passwordParams)
export const SignFormFieldPasswordAgain = signFormFieldTmpl(passwordAgainParams)