export class User {
  public id: string;
  public username: string;
  public password: string;
  private _token: string;

  constructor(username: string, password: string) {
    this.id = null;
    this.username = username;
    this.password = password;
    this._token = localStorage.getItem('token');
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
    localStorage.setItem('token', value);
  }
}
