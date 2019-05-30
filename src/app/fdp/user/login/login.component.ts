import {Component} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../../snackbar/snackbar.component';
import {UserService} from '../user.service';
import {login} from '../gql/auth.queries.gql';
import {Auth, LoginInput} from '../../../graphql.schema';
import {ApolloQueryResult} from 'apollo-client';

class UserLogin {
  login: string;
  password: string;

  constructor() {
    this.login = '';
    this.password = '';
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public readonly userLoginModel: UserLogin;
  public showPassword;

  constructor(
    private apollo: Apollo,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private dialogRef: MatDialogRef<null>,
  ) {
    this.showPassword = false;
    this.userLoginModel = new UserLogin();
  }

  public closeLogin() {
    this.dialogRef.close();
  }

  public login() {
    let success = false;
    const loginSub = this.userService.login({
      login: this.userLoginModel.login,
      password: this.userLoginModel.password,
    } as LoginInput)
      .subscribe(() => {
          success = true;
          this.closeLogin();
        },
        () => {
        },
        () => {
          loginSub.unsubscribe();
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: success ? 'done' : 'error',
              color: success ? '' : 'warn',
              message: success ? 'Vous êtes connecté' : 'Identifiants incorrects',
            },
          });
        },
      );
  }

}
