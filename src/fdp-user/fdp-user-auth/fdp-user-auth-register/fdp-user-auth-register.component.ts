import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {FdpUserAuthRegister} from './fdp-user-auth-register';

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

  constructor(private fdpAuthService: FdpUserAuthService) {
    this.userRegister = new FdpUserAuthRegister('', '', '', '');
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

}
