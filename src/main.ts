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

const app = document.querySelector('#app');
app.after(Popup.getContent());

window.addEventListener('DOMContentLoaded', async () => {
  router
    .use('/', Home)
    .use('/signin', SigninPage)
    .use('/signup', SignupPage)
    .use('/profile', ProfilePage)
    .use('/profile/edit', EditProfilePage)
    .use('/profile/password', PasswordProfilePage)
    .use('/chats', Chats)
    .use('/404', NotFoundPage)
    .use('/500', ServerErrorPage)
    .start();
});
