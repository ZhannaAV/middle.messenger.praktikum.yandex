import './Header.less';
import logo from '../../../public/logo.svg';

export const headerTmpl = (place) => `
<header class="header header_${place}">
    <a href='/'>
        <img class='header__logo' src=${logo} alt='logo'/>
    </a>
</header>
`