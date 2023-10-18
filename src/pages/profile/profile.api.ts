import { httpRequest } from '../../utils/api/http';

export interface IChangePasswordRequest {
  newPassword: string;
  oldPassword: string
}

export interface IEditProfileRequestData {
  email: string
  login: string,
  first_name: string,
  second_name: string,
  display_name: string;
  phone: string;
}

export type TProfileRequestData = IEditProfileRequestData | IChangePasswordRequest

const headers = {
  'Content-Type': 'application/json',
};

class ProfileApi {
  private readonly _commonUrlPart: string;

  constructor() {
    this._commonUrlPart = '/user';
  }

  public getInfo() {
    return httpRequest.get(`/auth${this._commonUrlPart}`, {});
  }

  public edit(data: IEditProfileRequestData) {
    return httpRequest.put(`${this._commonUrlPart}/profile`, { data: JSON.stringify(data), headers });
  }

  public changePassword(data: IChangePasswordRequest) {
    return httpRequest.put(`${this._commonUrlPart}/password`, { data: JSON.stringify(data), headers });
  }

  public changeAvatar(data: FormData) {
    return httpRequest.put(`${this._commonUrlPart}/profile/avatar`, { data });
  }

  public logout() {
    return httpRequest.post('/auth/logout');
  }
}

export const profileApi = new ProfileApi();
