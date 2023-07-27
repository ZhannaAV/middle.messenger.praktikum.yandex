import { profileInfoFieldTmpl } from './profileInfoField.tmpl';
import { profileInfoConfig } from '../../constants/profileInfoConfig';

const getFields = (config) => Object.entries(config)
  .reduce((fields, label) => fields + profileInfoFieldTmpl(label, config[label as unknown as string]), '') || '';

export const ProfileInfoFields = getFields(profileInfoConfig);
