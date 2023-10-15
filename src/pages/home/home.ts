import { Block } from '../../utils/block';
import { homeTmpl } from './home.tmpl';
import { Header } from '../../components/Header/Header';
import { templator } from '../../utils/templator';
import { IChildren } from '../../models/models';

export class Home extends Block<IChildren> {
  init() {
    this.props = {
      children: {
        header: new Header({ place: 'place_greeting' })
      }
    };
  }

  protected render() {
    return templator(homeTmpl(), this.props.children);
  }
}
