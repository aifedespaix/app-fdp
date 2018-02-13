export class FdpUserAuth {
  public username: string;
  public password: string;
  public email: string;
  private _token: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this._token = localStorage.getItem('token');
    this.email = null;
  }

  public profile(profile: any) {
    this.email = profile.email;
    this.username = profile.username;
    this.password = profile.password;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
    localStorage.setItem('token', value);
  }

  public reset() {
    this.username = null;
    this.password = null;
    this._token = null;
    localStorage.setItem('token', null)
  }
}
