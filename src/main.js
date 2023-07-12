import './style.less';
import lamp from '/public/lamp2.svg';
import {HeaderGreeting} from "./components/Header/Header";
import {Signin} from "./pages/signin/signin"
import {Signup} from "./pages/signup/signup";
import {Profile} from "./pages/profile/profile";
import {EditProfile} from "./pages/profile/modules/editProfile/editProfile";
import {ChangePassword} from "./pages/profile/modules/changePassword/changePassword";
import {Chats} from "./pages/chats/chats";
import {managePopup, Popup} from "./components/Popup/Popup";
import {manageChat} from "./pages/chats/components/Chat/Chat";

const app = document.querySelector('#app');
app.insertAdjacentHTML('afterend',Popup);
export const openPopup = managePopup();

const templ = `
${HeaderGreeting}
<main class="promo">
    <img src=${lamp} alt="switched on lamp" class="promo__img"/>
    <div class="promo__info">
        <h1 class="promo__title">Messenger for fun<div
            class='promo__title-word'>and study</div
            class='promo__title-word'>
        </h1>
        <nav class="navigation">
            <a class='navigation__link-signup' href='/signup'>
                Sign up
            </a>
            <a class='navigation__link-signin' href='/signin'>
                <button class="navigation__signin-btn" type='button'>
                    Sign in
                </button>
            </a>
        </nav>
    </div>
</main>
`

if (window.location.pathname === '/') app.innerHTML = templ
if (window.location.pathname === '/signin') app.innerHTML = Signin
if (window.location.pathname === '/signup') app.innerHTML = Signup
if (window.location.pathname === '/profile') app.innerHTML = Profile
if (window.location.pathname === '/profile/edit') app.innerHTML = EditProfile
if (window.location.pathname === '/profile/changePassword') app.innerHTML = ChangePassword
if (window.location.pathname.includes('profile')) {
    const avatar = document.querySelector(".avatar");
    avatar.addEventListener('click', openPopup)
}
if (window.location.pathname === '/chats') {
    app.innerHTML = Chats
    manageChat(openPopup)
}









