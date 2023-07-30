import { ErrorPage } from '../../components/errorPage/ErrorPage';
import { Block } from '../../utils/block';

export const ServerErrorPage: Block = new ErrorPage({
  title: '500',
  subTitle: 'We are already fixing',
});
