import {Component} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {UserService} from '../user.service';
import {SnackbarComponent} from '../../snackbar/snackbar.component';
import {Auth, RegisterInput} from '../../../graphql.schema';
import {register} from '../gql/auth.mutations.gql';
import {ApolloQueryResult} from 'apollo-client';

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
    let success = false;

    const loginSub = this.userService.register({
      email: this.userRegisterModel.email,
      name: this.userRegisterModel.login,
      password: this.userRegisterModel.password,
    } as RegisterInput)
      .subscribe(() => {
          success = true;
          this.closeRegister();
        },
        () => {
        },
        () => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 5000,
            data: {
              icon: success ? 'done' : 'error',
              color: success ? '' : 'warn',
              message: success ? 'Vous êtes inscrit et connecté' : `L'utilisateur existe déjà`,
            },
          });
          loginSub.unsubscribe();
        },
      );
  }
}
