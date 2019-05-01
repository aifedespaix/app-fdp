import {Component} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {UserService} from '../user.service';
import {FdpSnackbarComponent} from '../../fdp/fdp-snackbar/fdp-snackbar.component';
import {RegisterInput} from '../../graphql.schema';
import {register} from '../gql/auth.mutations.gql';

class UserRegister {
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor() {
    this.login = '';
    this.email = '';
    this.password = '';
    this.passwordConfirm = '';
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  public readonly userRegisterModel: UserRegister;
  public showPassword;

  constructor(
    private apollo: Apollo,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private dialogRef: MatDialogRef<null>,
  ) {
    this.showPassword = false;
    this.userRegisterModel = new UserRegister();
  }

  public closeRegister() {
    this.dialogRef.close();
  }

  public register() {
    const loginSub = this.apollo
      .mutate({
        mutation: register,
        variables: {
          data: {
            email: this.userRegisterModel.email,
            name: this.userRegisterModel.login,
            password: this.userRegisterModel.password,
          } as RegisterInput,
        },
      })
      .subscribe(({data}) => {
          this.userService.auth = data.authRegister;
          this.userService.updateStorage();
          this.snackBar.openFromComponent(FdpSnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'done',
              message: 'Vous êtes inscrit et connecté',
            },
          });
          this.closeRegister();
        },
        () => {
          this.snackBar.openFromComponent(FdpSnackbarComponent, {
            duration: 5000,
            data: {
              icon: 'error',
              color: 'warn',
              message: `L'utilisateur existe déjà`,
            },
          });
        },
        () => {
          loginSub.unsubscribe();
        },
      );
  }
}
