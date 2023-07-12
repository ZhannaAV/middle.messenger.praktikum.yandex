import {profileInputFieldTmpl} from "./profileInputField.tmpl";
import {profileInfoConfig} from "../../constants/profileInfoConfig";

const emailConfig = {
    value: profileInfoConfig.Email,
    label: "Email",
    name: "email",
    type: "email",
    isRequired: true,
    isError: false
}

const loginConfig = {
    value: profileInfoConfig.Login,
    label: "Login",
    name: "login",
    type: "text",
    isRequired: true,
    isError: false
}

const nameConfig = {
    value: profileInfoConfig.Name,
    label: "Name",
    name: "first_name",
    type: "text",
    isRequired: true,
    isError: false
}

const surnameConfig = {
    value: profileInfoConfig.Surname,
    label: "Surname",
    name: "second_name",
    type: "text",
    isRequired: false,
    isError: false
}

const displayNameConfig = {
    value: profileInfoConfig.DisplayName,
    label: "Display name",
    name: "display_name",
    type: "text",
    isRequired: true,
    isError: false
}

const phoneConfig = {
    value: profileInfoConfig.Phone,
    label: "Phone",
    name: "phone",
    type: "tel",
    isRequired: true,
    isError: false
}

const oldPasswordConfig = {
    value: "",
    label: "Old password",
    name: "oldPassword",
    type: "password",
    isRequired: true,
    isError: false
}

const newPasswordConfig = {
    value: "",
    label: "New password",
    name: "newPassword",
    type: "password",
    isRequired: true,
    isError: false
}

const repeatNewPasswordConfig = {
    value: "",
    label: "Repeat new password",
    name: "passwordAgain",
    type: "password",
    isRequired: true,
    isError: false
}

export const EmailProfileInputField = profileInputFieldTmpl(emailConfig)
export const LoginProfileInputField = profileInputFieldTmpl(loginConfig)
export const NameProfileInputField = profileInputFieldTmpl(nameConfig)
export const SurnameProfileInputField = profileInputFieldTmpl(surnameConfig)
export const DisplayNameProfileInputField = profileInputFieldTmpl(displayNameConfig)
export const PhoneProfileInputField = profileInputFieldTmpl(phoneConfig)
export const OldPasswordProfileInputField = profileInputFieldTmpl(oldPasswordConfig)
export const NewPasswordProfileInputField = profileInputFieldTmpl(newPasswordConfig)
export const RepeatNewPasswordProfileInputField = profileInputFieldTmpl(repeatNewPasswordConfig)