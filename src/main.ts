import './style.less';
import { SigninPage } from './pages/signin/signin';
import { SignupPage } from './pages/signup/signup';
import { ProfilePage } from './pages/profile/profile';
import { EditProfilePage } from './pages/profile/modules/editProfile/editProfile';
import { Chats } from './pages/chats/chats';
import { Popup } from './components/Popup/Popup';
import { NotFoundPage } from './pages/notFound/notFoundPage';
import { ServerErrorPage } from './pages/serverError/serverError';
import { Home } from './pages/home/home';
import { PasswordProfilePage } from './pages/profile/modules/passwordProfile/passwordProfile';
import { router } from './utils/routing/router';
import { EPathMap } from './utils/routing/model';
import { ERoute } from './utils/routing/route';

const app = document.querySelector('#app');
if (app) app.after(Popup.getContent());

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use(EPathMap.home, Home)
    .use(EPathMap.signin, SigninPage)
    .use(EPathMap.signup, SignupPage)
    .use(EPathMap.profile, ProfilePage, ERoute.protected)
    .use(EPathMap.editProfile, EditProfilePage, ERoute.protected)
    .use(EPathMap.editPassword, PasswordProfilePage, ERoute.protected)
    .use(EPathMap.chats, Chats, ERoute.protected)
    .use(EPathMap.notFound, NotFoundPage)
    .use(EPathMap.serverError, ServerErrorPage)
    .start();
});
