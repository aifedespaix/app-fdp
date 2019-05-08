import {Injectable} from '@angular/core';
import {LocalStorageService} from '../storage/local-storage.service';
import {Apollo} from 'apollo-angular';

import {Auth, User} from '../../graphql.schema';
import {profile} from './gql/auth.queries.gql';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private _auth: Auth;
  private _isLoged: boolean;

  constructor(private apollo: Apollo, private localStorage: LocalStorageService) {
    this._auth = new Auth();
    this._isLoged = false;
  }

  public updateStorage() {
    this.localStorage.token = this._auth.token.accessToken;
  }

  public authenticate() {
    const token = this.localStorage.token;

    if (token) {
      const profileSub = this.apollo
        .query({query: profile})
        .subscribe(({data}: any) => {
            this.auth = data.authProfile as Auth;
          },
          () => {
          },
          () => {
            profileSub.unsubscribe();
          },
        );
    }
  }

  get user(): User {
    return this._auth.user;
  }

  get isLogged(): boolean {
    return this._isLoged;
  }

  set auth(value: Auth) {
    this._auth = value;
    this._isLoged = true;
  }

}
