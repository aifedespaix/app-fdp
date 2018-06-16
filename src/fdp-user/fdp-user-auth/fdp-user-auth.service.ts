import { Injectable } from "@angular/core";

import "rxjs/add/operator/delay";
import { Apollo } from "apollo-angular";

import { FdpUser } from "../fdp-user";
import gql from "graphql-tag";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FdpUserAuthService {
  private _user: FdpUser;
  public isLoged: boolean;

  private loginRequest = gql`
    query login($username: String!, $password: String!) {
      signIn(data: { username: $username, password: $password }) {
        token
      }
    }
  `;

  private forgotPasswordQuery = gql`
    query forgotPassword($email: String!) {
      forgotPassword(data: { email: $email })
    }
  `;

  private verifyResetPasswordQuery = gql`
    query verifyResetPassword($user: String!, $token: String!) {
      verifyResetPassword(data: { user: $user, token: $token })
    }
  `;

  private resetPasswordMutation = gql`
    mutation resetPassword(
      $user: String!
      $token: String!
      $newPassword: String!
    ) {
      resetPassword(
        data: { token: $token, user: $user, newPassword: $newPassword }
      )
    }
  `;

  private registerMutation = gql`
    mutation register($email: String!, $username: String!, $password: String!) {
      register(
        data: { username: $username, password: $password, email: $email }
      ) {
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
          firstName
          lastName
        }
        email
        telephone
        friends {
          id
          #          firstName
          #          lastName
        }
      }
    }
  `;

  constructor(private apollo: Apollo) {
    this._user = new FdpUser();
    this.verifyLogin();
  }

  get user(): FdpUser {
    return this._user;
  }

  public login(
    username: string,
    password: string
  ): Observable<{ success: boolean; error: string }> {
    console.log(this.loginRequest);
    return this.apollo
      .query({
        query: this.loginRequest,
        variables: {
          username,
          password
        },
        errorPolicy: "all"
      })
      .map(({ data, errors }: any) => {
        if (errors) {
          return { success: false, error: errors[0].message };
        }

        if (data && data.signIn) {
          this.user.token = data.signIn.token;
          this.isLoged = true;
          this.updateUser().subscribe(
            () => {
              this.isLoged = true;
            },
            () => {
              this.isLoged = false;
            }
          );
          return { success: true, error: null };
        }
        return { success: false, error: "erreur chelou lol" };
      });
  }

  public logout() {
    this.apollo.getClient().resetStore();
    this._user.reset();
    this.isLoged = false;
  }

  public register(
    email: string,
    username: string,
    password: string
  ): Observable<{ success: boolean; error: string }> {
    return this.apollo
      .mutate({
        mutation: this.registerMutation,
        variables: {
          email,
          username,
          password
        },
        errorPolicy: "all"
      })
      .map(({ data, errors }: any) => {
        if (errors) {
          return { success: false, error: errors[0].message };
        }
        if (data && data.register) {
          return { success: true, error: null };
        }
        return { success: false, error: "erreur chelou lol" };
      });
  }

  private updateUser() {
    return this.apollo
      .query({
        query: this.profileRequest,
        variables: [],
        errorPolicy: "all"
      })
      .map(({ data, errors }: any) => {
        if (errors) {
          throw Error("Token invalide"); // En vrai c'ets pas obligé que ce soit ça l'erreur mdr
        }
        if (data && data.profile) {
          this._user.profile(data.profile);
          return { success: true, errors: null };
        }
        throw Error("Erreur chelou");
      });
  }

  private verifyLogin() {
    if (this.user.token !== null) {
      this.updateUser().subscribe(
        () => {
          this.isLoged = true;
        },
        () => {
          this.isLoged = false;
        }
      );
    } else {
      this.isLoged = false;
    }
  }

  public forgotPassword(email: string) {
    return this.apollo
      .query({
        query: this.forgotPasswordQuery,
        variables: { email },
        errorPolicy: "all"
      })
      .map(({ data, errors }: any) => {
        if (errors) {
          return { success: false, error: errors[0].message };
        }
        if (data && data.forgotPassword) {
          return { success: true, error: null };
        }
        return { success: false, error: "erreur chelou lol" };
      });
  }

  public verifyResetPassword(user: string, token: string) {
    return this.apollo
      .query({
        query: this.verifyResetPasswordQuery,
        variables: { user, token },
        errorPolicy: "all"
      })
      .map(({ data, errors }: any) => {
        if (errors) {
          return { success: false, error: errors[0].message };
        }
        if (data && data.verifyResetPassword) {
          return { success: true, error: null };
        }
        return { success: false, error: "erreur chelou lol" };
      });
  }

  public resetPassword(user, token, newPassword) {
    return this.apollo
      .mutate({
        mutation: this.resetPasswordMutation,
        variables: { user, token, newPassword },
        errorPolicy: "all"
      })
      .map(({ data, errors }: any) => {
        if (errors) {
          return { success: false, error: errors[0].message };
        }
        if (data && data.resetPassword) {
          return { success: true, error: null };
        }
        return { success: false, error: "erreur chelou lol" };
      });
  }
}
