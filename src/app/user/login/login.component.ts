import {Component, EventEmitter, Output} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FdpSnackbarComponent} from '../../fdp/fdp-snackbar/fdp-snackbar.component';
import {User} from '../user';
import {UserService} from '../user.service';

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
  public hide;

  constructor(private apollo: Apollo, private snackBar: MatSnackBar, private userService: UserService, private dialogRef: MatDialogRef<null>) {
    this.hide = true;
    this.userLoginModel = new UserLogin('', '');
  }

  public closeLogin() {
    this.dialogRef.close();
  }

  login() {
    const loginSub = this.apollo
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
      .subscribe(({data}) => {
          this.userService.user = {token: data.login.token, ...data.login.user} as User;
          this.snackBar.openFromComponent(FdpSnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'done',
              message: 'Vous êtes connecté',
            },
          });
          this.closeLogin();
        },
        () => {
          this.snackBar.openFromComponent(FdpSnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              color: 'warn',
              message: 'Identifiants incorrects',
            },
          });
        },
        () => {
          loginSub.unsubscribe();
        },
      );
  }

}
