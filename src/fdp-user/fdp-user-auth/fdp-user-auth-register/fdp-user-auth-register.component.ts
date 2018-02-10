import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {FdpUserAuthRegister} from './fdp-user-auth-register';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher
{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-fdp-user-auth-register',
  templateUrl: './fdp-user-auth-register.component.html',
  styleUrls: ['../fdp-user-auth.component.scss'],
})
export class FdpUserAuthRegisterComponent implements OnInit {

  private _showForm: boolean;
  @Output() onRegisterDone: EventEmitter<boolean> = new EventEmitter();
  public userRegister: FdpUserAuthRegister;
  public error: string;
  public userRegisterForm: FormGroup;
  matcher = new MyErrorStateMatcher();


  constructor(private fdpAuthService: FdpUserAuthService) {
    this.userRegister = new FdpUserAuthRegister('', '', '', '');
    this.userRegisterForm = new FormGroup({
      'register_email': new FormControl(this.userRegister.email, [
        Validators.required,
        Validators.email,
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'register_username': new FormControl(this.userRegister.username, [
        Validators.required,
        Validators.minLength(5),
      ]),
      'register_password': new FormControl(this.userRegister.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      'register_confirmPassword': new FormControl(this.userRegister.confirmPassword, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit() {
  }

  public register() {
    if (!this.verifyEmail()) {
      this.error = 'Email incorrect';
      return;
    }
    if (this.userRegister.username.length < 5) {
      this.error = 'Identifiant trop court';
      return;
    }
    if (this.userRegister.password.length < 8) {
      this.error = 'Mot de passe trop court';
      return;
    }
    if (this.userRegister.password !== this.userRegister.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.fdpAuthService.register(this.userRegister.email, this.userRegister.username, this.userRegister.password)
      .subscribe(({success, error}) => {
          if (success) {
            this.onRegisterDone.emit(true);
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

  private verifyEmail() {
    // tslint:disable-next-line:max-line-length
    const rgValidMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return rgValidMail.test(String(this.userRegister.email).toLowerCase());
  }

  public submitForm(userRegister) {
    console.log(userRegister)
  }

}
