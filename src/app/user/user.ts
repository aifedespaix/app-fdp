import {Resource} from '../resource/resource';

export class User {
  private _id: string;
  private _token: string;
  private _email: string;
  private _name: string;
  private _password: string;
  private _avatar: Resource;
  // private person: string;
  // private level: string;

  constructor(id: string, token: string, email: string, name: string, password: string, avatar: Resource) {
    this._id = id;
    this._token = token;
    this._email = email;
    this._name = name;
    this._password = password;
    this._avatar = avatar;
  }


  get id(): string {
    return this._id;
  }

  get token(): string {
    return this._token;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get password(): string {
    return this._password;
  }

  get avatar(): Resource {
    return this._avatar;
  }
}
