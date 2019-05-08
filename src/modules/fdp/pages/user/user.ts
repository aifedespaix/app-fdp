export class User {
  private _username: string;
  private _email: string;
  private _token: string;

  public loadToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this._token = token;
    }
  }

  public reader(userData: any) {
    if (userData.username) {
      this.username = userData.username;
    }
    if (userData.email) {
      this.email = userData.email;
    }
  }

  public reset() {
    this._username = null;
    this._email = null;
    this._token = null;
    localStorage.setItem('token', null);
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
    localStorage.setItem('token', value);
  }

}
