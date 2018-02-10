import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {FdpUserAuthLogin} from './fdp-user-auth-login';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fdp-user-auth-login',
  templateUrl: './fdp-user-auth-login.component.html',
  styleUrls: ['../fdp-user-auth.component.scss'],
})
export class FdpUserLoginComponent implements OnInit {

  @Output() onLoginDone: EventEmitter<boolean> = new EventEmitter();
  public userLogin: FdpUserAuthLogin;
  public userLoginFormGroup: FormGroup;
  public error: String;

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
    })
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

}
