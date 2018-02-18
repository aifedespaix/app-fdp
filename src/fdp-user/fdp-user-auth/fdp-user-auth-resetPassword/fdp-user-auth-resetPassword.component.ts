import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FdpUserAuthResetPassword} from './fdp-user-auth-resetPassword';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-fdp-user-auth-resetpassword',
  templateUrl: './fdp-user-auth-resetPassword.component.html',
  styleUrls: ['./fdp-user-auth-resetPassword.component.scss'],
})
export class FdpUserAuthResetPasswordComponent implements OnInit {

  public userAuthResetPassword: FdpUserAuthResetPassword;
  public userAuthResetPasswordFormGroup: FormGroup;
  public error: string;
  public canReset: boolean;

  constructor(private fdpAuthService: FdpUserAuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public snackBar: MatSnackBar) {
    this.canReset = null;
    this.userAuthResetPassword = new FdpUserAuthResetPassword('');
    this.userAuthResetPasswordFormGroup = new FormGroup({
      resetPassword_password: new FormControl(this.userAuthResetPassword.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.error = '';
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const token = params['token'];
      const user = params['user'];
      if (token && user) {
        this.fdpAuthService.verifyResetPassword(user, token).subscribe(({success, error}) => {
          this.canReset = success;
          if (success) {
            this.userAuthResetPassword.token = token;
            this.userAuthResetPassword.user = user;
          } else {
            this.error = error;
          }
        });
      } else {
        this.canReset = false;
        this.error = 'Lien de reset invalide';
      }
    });
  }

  public resetPassword() {
    this.fdpAuthService.resetPassword(
      this.userAuthResetPassword.user,
      this.userAuthResetPassword.token,
      this.userAuthResetPassword.password)
      .subscribe(({success, error}) => {
          if (success) {
            return this.fdpAuthService.login(this.userAuthResetPassword.user, this.userAuthResetPassword.password)
              .subscribe(({success: loginSuccess, error: loginError}) => {
                if (loginSuccess) {
                  this.snackBar.open('Le mot de passe à bien été réinitialisé', 'osef', {
                    duration: 5000,
                  });
                  this.router.navigate(['/']);
                  return {success: true, error: null};
                } else {
                  return {success: false, error: loginError}
                }
              });
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

}
