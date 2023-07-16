import {signFormTempl} from "./signForm.tmpl";

const formSigninConfig = {
    title: "Nice to see you!",
    formName: "signin-form",
    submitBtnText: "Sign in" ,
    children: "",
    isDisabled: true,
    text: "Not registered?",
    linkTo: "/signup",
    textLink: "Sign up",
    isError: false,
}

const formSignupConfig = {
    title: "Welcome!",
    formName: "signup-form",
    submitBtnText: "Sign up" ,
    children: "",
    isDisabled: true,
    text: "Have already registered?",
    linkTo: "/signin",
    textLink: "Sign in",
    isError: false,
}

export const FormSignin =(children) => signFormTempl({...formSigninConfig, children})
export const FormSignup = (children) => signFormTempl({...formSignupConfig, children})
