import {profileTmpl} from "./profile.tmpl";
import {ProfileInfoFields} from "./components/ProfileInfoFields/ProfileInfoFields";
import {profileInfoConfig} from "./constants/profileInfoConfig";
import {ProfileLayout} from "./components/ProfileLayout/ProfileLayout";

const ProfileInfoContent = profileTmpl(profileInfoConfig.DisplayName,  ProfileInfoFields);
export const Profile = ProfileLayout(ProfileInfoContent)
