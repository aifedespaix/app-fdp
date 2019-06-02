import {Component} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../../snackbar/snackbar.component';
import {UserService} from '../user.service';
import {LoginInput} from '../../../graphql.schema';

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
        },
        () => {
          loginSub.unsubscribe();
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              color: 'warn',
              message: 'Identifiants incorrects',
            },
          });
        },
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'done',
              color: '',
              message: 'Vous êtes connecté',
            },
          });
          loginSub.unsubscribe();
          this.closeLogin();
        },
      );
  }

}
