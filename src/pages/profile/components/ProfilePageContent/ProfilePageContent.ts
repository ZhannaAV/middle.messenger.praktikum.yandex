import { IProfile, profilePgeContentTmpl } from './profilePgeContentTmpl';
import { IChildren } from '../../../../models/models';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';

type TProfile = IProfile & IChildren;

export class ProfilePageContent extends Block<TProfile> {
  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(profilePgeContentTmpl(params), children);
  }
}
