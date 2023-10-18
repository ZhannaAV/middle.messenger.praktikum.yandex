import { httpRequest } from '../../utils/api/http';

export interface ISigninRequestData {
  login: string,
  password: string,
}

export interface ISignupRequestData {
  email: string
  login: string,
  first_name: string,
  second_name: string,
  password: string;
  phone: string;
}

const headers = {
  'Content-Type': 'application/json',
};

class SignFormApi {
  private readonly _commonUrlPart: string;

  constructor() {
    this._commonUrlPart = '/auth';
  }

  public signup(data: ISignupRequestData) {
    return httpRequest.post(`${this._commonUrlPart}/signup`, { data: JSON.stringify(data), headers });
  }

  public signin(data: ISigninRequestData) {
    return httpRequest.post(`${this._commonUrlPart}/signin`, { data: JSON.stringify(data), headers });
  }
}

export const signFormApi = new SignFormApi();
