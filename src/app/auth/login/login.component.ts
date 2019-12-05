import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {LoginInput} from '../../model/_generated/graphql.schema';
import {SnackService} from '../../services/snack/snack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public readonly loginInput: LoginInput;
  public showPassword;

  constructor(
    private readonly snackService: SnackService,
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
          this.snackService.success('Vous êtes connecté');
          this.closeLogin();
          loginSub.unsubscribe();
        },
        () => {
          this.snackService.error('Identifiants incorrects');
          loginSub.unsubscribe();
        },
      );
  }

}
