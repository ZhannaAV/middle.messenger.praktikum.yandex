import { Block } from '../../utils/block';
import { homeTmpl } from './home.tmpl';
import { Header } from '../../components/Header/Header';
import { templator } from '../../utils/templator';

export class Home extends Block {
  render() {
    return templator(homeTmpl(), this.props.children);
  }
}

export const HomePage = new Home({
  children: {
    header: new Header({ place: 'place_greeting' }),
  },
});
