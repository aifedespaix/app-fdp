import {Component, OnDestroy} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UserService} from '../user.service';
import {SnackbarComponent} from '../../snackbar/snackbar.component';
import {RegisterInput} from '../../../graphql.schema';
import {Subscription} from 'rxjs';
import {UserRegister} from './userRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {

  public readonly userRegisterModel: UserRegister;
  public showPassword;
  private registerSub: Subscription;

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly userService: UserService,
    private readonly dialogRef: MatDialogRef<null>,
  ) {
    this.showPassword = false;
    this.userRegisterModel = new UserRegister();
  }

  ngOnDestroy(): void {
  }

  public closeRegister() {
    this.dialogRef.close();
  }

  public register() {
    this.registerSub = this.userService.register({
      email: this.userRegisterModel.email,
      name: this.userRegisterModel.login,
      password: this.userRegisterModel.password,
    } as RegisterInput)
      .subscribe(() => {
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
        },
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'done',
              color: '',
              message: 'Vous êtes inscrit et connecté' ,
            },
          });
          this.registerSub.unsubscribe();
          this.closeRegister();
        },
      );
  }
}
