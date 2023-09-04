import './home.less';

// language=html
export const homeTmpl = (): string => `
  <div id="app">
    <div data-header></div>
    <main class="promo">
      <img src="/lamp2.svg" alt="switched on lamp" class="promo__img"/>
      <div class="promo__info">
        <h1 class="promo__title">Messenger for fun
          <div
            class='promo__title-word'>and study
          </div
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
  </div>
`;
