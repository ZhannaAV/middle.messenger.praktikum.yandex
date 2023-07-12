import {profileInfoFieldTmpl} from "./profileInfoField.tmpl";
import {profileInfoConfig} from "../../constants/profileInfoConfig";

const getFields = (config) => {
    let fields = ''

    for (let label in config) {
         fields = fields + profileInfoFieldTmpl(label, config[label])
    }

    return fields
}



export const ProfileInfoFields = getFields(profileInfoConfig)
