import './ErrorPage.less';
import { EPathMap } from '../../utils/routing/model';

export interface IErrorPage {
  title: string;
  subTitle: string;
}

// language=html
export const errorPageTmpl = ({
  title,
  subTitle,
}: IErrorPage): string => `
  <main class="error-page">
    <h2 class="error-page__title">${title}</h2>
    <p class="error-page__subtitle">${subTitle}</p>
    <a href=${EPathMap.chats} class="error-page__link">Back to chats</a>
  </main>
`;
