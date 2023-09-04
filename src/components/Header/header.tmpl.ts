import './Header.less';

export interface IHeader {
  place: string;
}

// language=html
export const headerTmpl = ({ place }: IHeader): string => `
    <header class="header header_${place}">
      <a href='/'>
        <img class='header__logo' src="/logo.svg" alt='logo'/>
      </a>
    </header>
`;
