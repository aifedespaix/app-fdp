export class ResetPassword {
  private _password: string;
  private _token: string;
  private _user: string;

  constructor(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }
}
