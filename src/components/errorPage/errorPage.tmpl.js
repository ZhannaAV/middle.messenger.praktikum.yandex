import './ErrorPage.less'
// language=html
export const errorPageTmpl = ({title, subTitle }) => `
    <main class="error-page">
        <h2 class="error-page__title">${title}</h2>
        <p class="error-page__subtitle">${subTitle}</p>
        <a href="/chats" class="error-page__link">Back to chats</a>
    </main>
`