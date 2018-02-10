import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {FdpUserAuthLogin} from './fdp-user-auth-login';

@Component({
  selector: 'app-fdp-user-auth-login',
  templateUrl: './fdp-user-auth-login.component.html',
  styleUrls: ['../fdp-user-auth.component.scss'],
})
export class FdpUserLoginComponent implements OnInit {

  @Output() onLoginDone: EventEmitter<boolean> = new EventEmitter();
  public userLogin: FdpUserAuthLogin;
  public error: String;

  constructor(private fdpAuthService: FdpUserAuthService) {
    this.userLogin = new FdpUserAuthLogin('', '');
  }

  ngOnInit() {
  }

  public login() {
    if (this.userLogin.username.length < 5) {
      this.error = 'Identifiant trop court';
      return;
    }
    if (this.userLogin.password.length < 8) {
      this.error = 'Mot de passe trop court';
      return;
    }

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
