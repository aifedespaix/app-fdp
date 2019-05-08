import {Injectable} from '@angular/core';

import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {loginQuery} from './_queries/login';
import {profileQuery} from './_queries/profile';

import {map} from 'rxjs/operators';

import {User} from '../user';
import {registerMutation} from './_queries/register';
import {forgotPasswordQuery} from './_queries/forgotPassword';
import {verifyResetPasswordQuery} from './_queries/verifyResetPassword';
import {resetPasswordMutation} from './_queries/resetPassword';

@Injectable()
export class AuthService {
  private _user: User;
  private _isLoged: boolean;

  constructor(private apollo: Apollo) {
    this.user = new User();
    this.user.loadToken();
    if (this.user.token) {
      this.updateUserInfos();
    }
  }

  public logout() {
    // this.apollo.getClient().resetStore();
    this._user.reset();
    this._isLoged = false;
  }

  public login(username: string, password: string) {
    return this.apollo
      .query<{ signIn }>({query: loginQuery, variables: {username, password}})
      .pipe(map(({data}) => {
          this.user.token = data.signIn.token;
          this._isLoged = true;
          this.updateUserInfos();
        }),
      );
  }

  public register(email: string, username: string, password: string) {
    return this.apollo
      .mutate<{ register }>({mutation: registerMutation, variables: {email, username, password}})
      .pipe(map(() => {
        this.login(username, password).subscribe();
      }));
  }

  public forgotPassword(email: string) {
    return this.apollo.query<{ forgotPassword }>({query: forgotPasswordQuery, variables: {email}});
  }
  public verifyResetPassword(user: string, token: string) {
    return this.apollo.query({query: verifyResetPasswordQuery, variables: {user, token}});
  }

  public resetPassword(user, token, newPassword) {
    return this.apollo.mutate({mutation: resetPasswordMutation, variables: {user, token, newPassword}});
  }

  private updateUserInfos() {
    console.log('NTMMMM');
    this.apollo
      .query<{ profile }>({query: profileQuery})
      .subscribe(({data}) => {
          this.user.reader(data.profile);
          this._isLoged = true;
        },
        () => {
          this.logout();
        },
      );
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get isLoged(): boolean {
    return this._isLoged;
  }

}
