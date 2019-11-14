import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../auth.service';
import {RegisterInput} from '../../model/graphql';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {Register} from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  public showPassword;
  public readonly registerModel: Register;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<null>,
  ) {
    this.showPassword = false;
    this.registerModel = new Register();
    this.registerModel.registerInput = new RegisterInput();
  }

  public closeRegister() {
    this.dialogRef.close();
  }

  public register() {
    const registerSub = this.authService.register(this.registerModel.registerInput)
      .subscribe(
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'done',
              color: '',
              message: 'Vous êtes inscrit et connecté',
            },
          });
          registerSub.unsubscribe();
          this.closeRegister();
        },
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              color: 'warn',
              message: `L'utilisateur existe déjà`,
            },
          });
          registerSub.unsubscribe();
        },
        () => {
          console.log('auth end');
        },
      );
  }
}
