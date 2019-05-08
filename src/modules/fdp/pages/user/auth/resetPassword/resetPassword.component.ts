import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ResetPassword} from './resetPassword';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-auth-resetpassword',
  templateUrl: './resetPassword.component.html',
  styleUrls: [],
})
export class ResetPasswordComponent implements OnInit {
  public ResetPassword: ResetPassword;
  public ResetPasswordFormGroup: FormGroup;
  public error: string;
  public canReset: boolean;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar,
  ) {
    this.canReset = null;
    this.ResetPassword = new ResetPassword('');
    this.ResetPasswordFormGroup = new FormGroup({
      resetPassword_password: new FormControl(this.ResetPassword.password, [
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
        this.authService
          .verifyResetPassword(user, token)
          .subscribe(() => {
              this.canReset = true;
              this.ResetPassword.token = token;
              this.ResetPassword.user = user;
            },
            () => {
              this.canReset = false;
            });
      } else {
        this.canReset = false;
      }
    });
  }

  public resetPassword() {
    this.authService
      .resetPassword(this.ResetPassword.user, this.ResetPassword.token, this.ResetPassword.password)
      .subscribe(
        () => {
          this.snackBar.open('Le mot de passe à bien été changé', 'osef', {duration: 5000});
          this.router.navigate(['/']);
        },
        (error) => {
          this.snackBar.open(error.graphQLErrors.map(x => x.message), '', {duration: 1500});
        },
      );

    return false;
  }
}
