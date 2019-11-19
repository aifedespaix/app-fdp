import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth.service';
import {LoginInput} from '../../model/graphql.schema';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public readonly loginInput: LoginInput;
  public showPassword;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<null>,
  ) {
    this.showPassword = false;
    this.loginInput = new LoginInput();
  }

  public closeLogin() {
    this.dialogRef.close();
  }

  public login() {
    const loginSub = this.authService.login(this.loginInput)
      .subscribe(
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {icon: 'done', color: '', message: 'Vous êtes connecté'},
          });
          this.closeLogin();
        },
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {icon: 'error', color: 'warn', message: 'Identifiants incorrects'},
          });
        },
        () => {
          loginSub.unsubscribe();
        },
      );
  }

}
