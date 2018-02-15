import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {FdpUserAuthLogin, FdpUserForgotPassword} from './fdp-user-auth-login';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-fdp-user-auth-login',
  templateUrl: './fdp-user-auth-login.component.html',
  styleUrls: ['../fdp-user-auth.component.scss'],
})
export class FdpUserLoginComponent implements OnInit {

  private typeForm: number;
  @Output() onLoginDone: EventEmitter<boolean> = new EventEmitter();
  public userLogin: FdpUserAuthLogin;
  public userLoginFormGroup: FormGroup;

  public userForgotPassword: FdpUserForgotPassword;
  public userForgotPasswordFormGroup: FormGroup;
  public error: String;

  readonly TYPE_FORM = {
    login: 0,
    forgotPassword: 1,
  };

  constructor(private fdpAuthService: FdpUserAuthService) {
    this.userLogin = new FdpUserAuthLogin('', '');
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

    this.userForgotPassword = new FdpUserForgotPassword('');
    this.userForgotPasswordFormGroup = new FormGroup({
      forgotPassword_email: new FormControl(this.userForgotPassword.email, [
        Validators.required,
        Validators.email,
      ]),
    },);

    this.switchLogin();
  }

  ngOnInit() {
  }

  public login() {
    this.fdpAuthService.login(this.userLogin.username, this.userLogin.password)
      .subscribe(({success, error}) => {
          if (success) {
            this.onLoginDone.emit(true);
          } else {
            this.error = error;
          }
        },
        err => {
          console.log('err');
          console.log(err);
        });

    return false;
  }

  public forgotPassword() {
    this.fdpAuthService.forgotPassword(this.userForgotPassword.email)
      .subscribe(({success, error}) => {
          if (success) {
            this.onLoginDone.emit(true);
          } else {
            this.error = error;
          }
        },
        err => {
          console.log('err');
          console.log(err);
        });

    return false;
  }

  public switchForgotPassword() {
    this.typeForm = this.TYPE_FORM.forgotPassword;
  }

  public switchLogin() {
    this.typeForm = this.TYPE_FORM.login;
  }

}
