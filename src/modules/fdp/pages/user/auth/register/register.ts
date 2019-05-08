export class UserAuthRegister {
  private _email: string;
  private _username: string;
  private _password: string;
  private _confirmPassword: string;

  constructor(
    email: string,
    username: string,
    password: string,
    confirmPassword: string
  ) {
    this._email = email;
    this._username = username;
    this._password = password;
    this._confirmPassword = confirmPassword;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }

  public reset() {
    this._email = '';
    this._username = '';
    this._password = '';
    this._confirmPassword = '';
  }
}