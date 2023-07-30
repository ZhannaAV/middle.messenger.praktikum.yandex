import { ErrorPage } from '../../components/errorPage/ErrorPage';
import { Block } from '../../utils/block';

export const NotFoundPage: Block = new ErrorPage({
  title: '404',
  subTitle: 'Got it wrong',
});
