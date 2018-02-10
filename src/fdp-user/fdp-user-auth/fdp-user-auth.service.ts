import {Injectable} from '@angular/core';

import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';

import {User} from '../fdp-user';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FdpUserAuthService {

  private _user: User;
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
    this._user = new User('', '');
    this.isLoged = false;
  }

  get user(): User {
    return this._user;
  }

  /**
   * @param {string} username
   * @param {string} password
   * @returns {Observable<{success: boolean; error: string}>}
   */
  public login(username: string, password: string): Observable<{ success: boolean, error: string }> {
    return this.apollo.query({
      query: this.loginRequest,
      variables: {
        username: username,
        password: password,
      },
      errorPolicy: 'all'
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
      }
    );
  }


  logout() {
    this.apollo.getClient().resetStore();
  }

  public register(email: string, username: string, password: string): Observable<{ success: boolean, error: string }> {

    return this.apollo.mutate({
      mutation: this.registerMutation,
      variables: {
        email,
        username,
        password,
      },
      errorPolicy: 'all'
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.register) {
          this.login(username, password);
          return {success: true, error: null};
        }
        return {success: false, error: 'erreur chelou lol'};
      }
    );
  }

  /**
   * @returns {Promise<void>}
   */
  private async updateUser() {
    this.apollo.query({
      query: this.profileRequest,
      errorPolicy: 'all'
    }).subscribe(({data, errors}: any) => {
      console.log('okkkk');
      if (errors) {
        console.log(errors);
      } else if (data && data.profile) {
        console.log(this._user);
        this._user = data.profile;
        console.log(this._user);
      }
    });
  }

}
