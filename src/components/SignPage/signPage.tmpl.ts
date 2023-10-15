import './SignPage.less';

export interface ISignPage {
  title: string;
  signText: string;
  linkTo: string;
  textLink: string;
}

// languages=html
export const signPageTmpl = ({
  title,
  signText,
  linkTo,
  textLink,
}: ISignPage): string => `
<div id="app">
<div data-header></div>
  <main class="sign-page">
    <h2 class="sign-page__title">${title}</h2>
    <div data-form></div>
    <p class="sign-page__text">
      ${signText}
      <a class="sign-page__link" href=${linkTo}>${textLink}</a>
    </p>
  </main>
</div>
`;
