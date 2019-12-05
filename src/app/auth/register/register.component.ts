import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from '../../services/auth.service';
import {RegisterInput} from '../../model/_generated/graphql.schema';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {Register} from './register';
import {SnackService} from '../../services/snack/snack.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  public showPassword;
  public readonly registerModel: Register;

  constructor(
    private readonly snackService: SnackService,
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
          this.snackService.success('Vous êtes inscrit et connecté');
          this.closeRegister();
        },
        () => {
          this.snackService.error(`L'utilisateur existe déjà`);
        },
        () => {
          registerSub.unsubscribe();
        },
      );
  }
}
