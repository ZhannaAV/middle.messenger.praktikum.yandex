import './style.less';
import { SigninPage } from './pages/signin/signin';
import { SignupPage } from './pages/signup/signup';
import { ProfilePage } from './pages/profile/profile';
import { EditProfilePage } from './pages/profile/modules/editProfile/editProfile';
import { ChatsPage } from './pages/chats/chats';
import { Popup } from './components/Popup/Popup';
import { NotFoundPage } from './pages/notFound/notFoundPage';
import { ServerErrorPage } from './pages/serverError/serverError';
import { HomePage } from './pages/home/home';
import { PasswordProfilePage } from './pages/profile/modules/passwordProfile/passwordProfile';

const app = document.querySelector('#app');
app.after(Popup.getContent());

if (window.location.pathname === '/') app.replaceWith(HomePage.getContent());
if (window.location.pathname === '/signin') app.replaceWith(SigninPage.getContent());
if (window.location.pathname === '/signup') app.replaceWith(SignupPage.getContent());
if (window.location.pathname === '/profile') app.replaceWith(ProfilePage.getContent());
if (window.location.pathname === '/profile/edit') app.replaceWith(EditProfilePage.getContent());
if (window.location.pathname === '/profile/passwordProfile') app.replaceWith(PasswordProfilePage.getContent());
if (window.location.pathname === '/chats') app.replaceWith(ChatsPage.getContent());
if (window.location.pathname === '/404') app.replaceWith(NotFoundPage.getContent());
if (window.location.pathname === '/500') app.replaceWith(ServerErrorPage.getContent());
