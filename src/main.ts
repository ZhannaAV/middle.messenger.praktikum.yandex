import './style.less';
import { SigninPage } from './pages/signin/signin';
import { SignupPage } from './pages/signup/signup';
import { Profile } from './pages/profile/profile';
import { EditProfile } from './pages/profile/modules/editProfile/editProfile';
import { ChangePassword } from './pages/profile/modules/changePassword/changePassword';
import { Chats } from './pages/chats/chats';
import { managePopup, Popup } from './components/Popup/Popup';
import { manageChat } from './pages/chats/components/Chat/Chat';
import { NotFoundPage } from './pages/notFound/notFoundPage';
import { ServerErrorPage } from './pages/serverError/serverError';
import { HomePage } from './pages/home/home';

const app = document.querySelector('#app');
app.insertAdjacentHTML('afterend', Popup);
export const openPopup = managePopup();

// console.log(FormSignin);

if (window.location.pathname === '/') app.replaceWith(HomePage.getContent());
if (window.location.pathname === '/signin') app.replaceWith(SigninPage);
if (window.location.pathname === '/signup') app.replaceWith(SignupPage);
if (window.location.pathname === '/profile') app.innerHTML = Profile;
if (window.location.pathname === '/profile/edit') app.innerHTML = EditProfile;
if (window.location.pathname === '/profile/changePassword') app.innerHTML = ChangePassword;
if (window.location.pathname.includes('profile')) {
  const avatar = document.querySelector('.avatar');
  avatar.addEventListener('click', openPopup);
}
if (window.location.pathname === '/chats') {
  app.innerHTML = Chats;
  manageChat(openPopup);
}
if (window.location.pathname === '/404') app.innerHTML = NotFoundPage;
if (window.location.pathname === '/500') app.innerHTML = ServerErrorPage;
