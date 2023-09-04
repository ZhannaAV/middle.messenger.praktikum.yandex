import { IProfile, profilePageContentTmpl } from './profilePageContentTmpl';
import { IChildren, TEvent } from '../../../../models/models';
import { Block } from '../../../../utils/block';
import { templator } from '../../../../utils/templator';
import { store, StoreEvents } from '../../../../store/store';
import { profileController } from '../../profile.controller';

type TProfile = IProfile & IChildren;

export class ProfilePageContent extends Block<TProfile> {
  constructor(props: TProfile | Record<string, never>) {
    super(props);
    store.on(StoreEvents.Updated, () => {
      this.setProps({ display_name: store.getState().user?.display_name || store.getState().user?.first_name });
    });
  }

  init() {
    this.props.events = {
      click: (e: TEvent) => {
        if (e.target.id === 'logout') profileController.logout();
      }
    };
  }

  protected render() {
    const {
      children,
      ...params
    } = this.props;
    return templator(profilePageContentTmpl(params), children);
  }
}

export const profilePageContent = new ProfilePageContent({});
