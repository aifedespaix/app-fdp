export class FdpUser {
  public username: string;
  public email: string;
  private _token: string;

  constructor() {}

  public profile(profile: any) {
    this.email = profile.email;
    this.username = profile.username;
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
    this._token = null;
    localStorage.setItem('token', null)
  }
}
