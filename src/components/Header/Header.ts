import { headerTmpl } from './header.tmpl';
import { Block } from '../../utils/block';
import { templator } from '../../utils/templator';

export class Header extends Block {
  render() {
    return templator(headerTmpl(this.props));
  }
}
