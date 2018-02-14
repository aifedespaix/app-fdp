import {Injectable} from '@angular/core';

import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';

import {FdpUserAuth} from '../fdp-user';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FdpUserAuthService {

  private _user: FdpUserAuth;
  public isLoged: boolean;

  private loginRequest = gql`
    query login($username: String! $password: String!) {
      signIn(
        data: {
          username: $username
          password: $password}) {
        token
      }
    }
  `;
  private registerMutation = gql`
    mutation register($email: String! $username: String! $password: String!) {
      register(data: {username: $username, password: $password, email: $email}) {
        id
      }
    }
  `;
  private profileRequest = gql`
    query profile {
      profile {
        id
        userLevel
        username
        h_password
        person {
          id
        }
        email
        telephone
        friends {
          id
        }
      }
    }
  `;

  constructor(private apollo: Apollo) {
    this._user = new FdpUserAuth('', '');
    this.verifyLogin();
  }

  get user(): FdpUserAuth {
    return this._user;
  }

  public login(username: string, password: string): Observable<{ success: boolean, error: string }> {
    return this.apollo.query({
      query: this.loginRequest,
      variables: {
        username: username,
        password: password,
      },
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.signIn) {
          this.user.username = username;
          this.user.token = data.signIn.token;
          this.isLoged = true;
          this.updateUser();
          return {success: true, error: null};
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }

  public logout() {
    this.apollo.getClient().resetStore();
    this._user.reset();
    this.isLoged = false;
  }

  public register(email: string, username: string, password: string): Observable<{ success: boolean, error: string }> {

    return this.apollo.mutate({
      mutation: this.registerMutation,
      variables: {
        email,
        username,
        password,
      },
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.register) {
          return {success: true, error: null};
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }

  private async updateUser(): Observable<{ success: boolean, error: string }> {
    return this.apollo.query({
      query: this.profileRequest,
      variables: [],
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, errors: errors};
        } else if (data && data.profile) {
          this._user.profile(data.profile);
          return {success: true, errors: null};
        }
      });
  }

  private verifyLogin() {
    if (this.user.token !== null) {
      this.updateUser()
        .subscribe(
          res => {
            console.log('res');
            console.log(res);
          },
          err => {
            console.log('err');
            console.log(err);
          });

      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
  }
}
