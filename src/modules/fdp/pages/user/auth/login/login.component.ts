import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {UserAuthLogin, UserForgotPassword} from './login';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public typeForm: number;
  @Output() loginDone: EventEmitter<boolean> = new EventEmitter();
  public userLogin: UserAuthLogin;
  public userLoginFormGroup: FormGroup;

  public userForgotPassword: UserForgotPassword;
  public userForgotPasswordFormGroup: FormGroup;

  readonly TYPE_FORM = {
    login: 0,
    forgotPassword: 1,
  };

  private static isValidEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const validMail = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validMail.test(email);
  }

  constructor(private authService: AuthService, public snackBar: MatSnackBar) {
    this.userLogin = new UserAuthLogin('', '');
    this.userLoginFormGroup = new FormGroup({
      login_username: new FormControl(this.userLogin.username, [
        Validators.required,
        Validators.minLength(3),
      ]),
      login_password: new FormControl(this.userLogin.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.userForgotPassword = new UserForgotPassword('');
    this.userForgotPasswordFormGroup = new FormGroup({
      forgotPassword_email: new FormControl(this.userForgotPassword.email, [
        Validators.required,
        Validators.email,
      ]),
    });

    this.switchLogin();
  }

  ngOnInit() {
  }

  public login() {
    this.authService
      .login(this.userLogin.username, this.userLogin.password)
      .subscribe(
        () => {
          this.snackBar.open('Connexion réussie', '', {duration: 1500});
          this.loginDone.emit(true);
        },
        error => {
          this.snackBar.open(error.graphQLErrors.map(x => x.message), '', {
            duration: 1500,
          });
        },
      );
  }

  public forgotPassword() {
    this.authService.forgotPassword(this.userForgotPassword.email).subscribe(
      () => {
        this.userForgotPassword.reset();
        this.snackBar.open('Demande de nouveau mot de passe : Vas voir tes mails', 'Ok', {
          duration: 10000,
        });
        this.loginDone.emit(true);
      },
      error => {
        this.snackBar.open('Ce mail ne correspond à aucun compte', 'Dommage', {
          duration: 5000,
        });
      },
    );
  }

  public switchForgotPassword() {
    if (LoginComponent.isValidEmail(this.userLogin.username)) {
      this.userForgotPassword.email = this.userLogin.username;
    }
    this.typeForm = this.TYPE_FORM.forgotPassword;
  }

  public switchLogin() {
    this.typeForm = this.TYPE_FORM.login;
  }
}
