import {Injectable} from '@angular/core';
import {LocalStorageService} from '../storage/local-storage.service';
import {Apollo} from 'apollo-angular';

import {Auth, LoginInput, RegisterInput, User} from '../../graphql.schema';
import {login, profile} from './gql/auth.queries.gql';
import {register} from './gql/auth.mutations.gql';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';

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
        .subscribe(({data}: ApolloQueryResult<{ authProfile: Auth }>) => {
            this.auth = data.authProfile;
          },
          () => {
          },
          () => {
            profileSub.unsubscribe();
          },
        );
    }
  }

  public login(loginInput: LoginInput) {
    return this.apollo
      .query({
        query: login,
        variables: {data: loginInput},
      }).pipe(map(({data}: ApolloQueryResult<{ authLogin: Auth }>) => {
        this.auth = data.authLogin;
      }));
  }

  public register(registerInput: RegisterInput) {
    return this.apollo
      .mutate({
        mutation: register,
        variables: {
          data: registerInput,
        },
      }).pipe(map(({data}: ApolloQueryResult<{ authRegister: Auth }>) => {
        this.auth = data.authRegister;
      }));
  }

  public logout() {
    this._auth = new Auth();
    this._isLoged = false;
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
    this.updateStorage();
  }

}
