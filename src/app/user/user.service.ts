import {Injectable} from '@angular/core';
import {User} from './user';
import {LocalStorageService} from '../storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private _user: User;
  private _isLoged: boolean;

  constructor(private localStorage: LocalStorageService) {
    this._user = null;
    this._isLoged = false;
  }

  private updateStorage() {
    this.localStorage.token = this._user.token;
  }

  public authent() {
    const token = this.localStorage.token;
    console.log(token);
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
    this.updateStorage();
    if (this._user) {
      this._isLoged = true;
    }
  }

  get isLoged(): boolean {
    return this._isLoged;
  }
}
