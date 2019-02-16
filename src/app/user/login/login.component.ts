import {Component, EventEmitter, Output} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {MatSnackBar} from '@angular/material';
import {FdpSnackbarComponent} from '../../fdp/fdp-snackbar/fdp-snackbar.component';

class UserLogin {
  login: string;
  password: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public readonly userLoginModel: UserLogin;
  @Output() private close = new EventEmitter();
  public hide;

  constructor(private apollo: Apollo, private snackBar: MatSnackBar) {
    this.hide = true;
    this.userLoginModel = new UserLogin('', '');
  }

  closeLogin() {
    this.close.emit();
  }

  login() {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation login($login: String!, $password: String!) {
            login(email: $login, password: $password) {
            token
            user {
              id
              email
              name
            }
          }
        }
       `,
        variables: {login: this.userLoginModel.login, password: this.userLoginModel.password},
      })
      .subscribe(res => {
          console.log(res);
        },
        () => {
          this.snackBar.openFromComponent(FdpSnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              message: 'Identifiants incorrects'
            }
          });
        },
        () => {
          console.log('fini');
        });
  }

}
