import {HeaderSign} from "../../components/Header/Header";
import {FormSignin} from "../../components/SignForm/SignForm";
import {SignFormFieldLogin, SignFormFieldPassword} from "../../components/SignFormField/SignFormField";

const signInFields = `
${SignFormFieldLogin}
${SignFormFieldPassword}
`

export const Signin = `
${HeaderSign}
${FormSignin(signInFields)}
`