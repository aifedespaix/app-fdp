import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FdpUserAuthService} from '../fdp-user-auth.service';
import {FdpUserAuthRegister} from './fdp-user-auth-register';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPasswordValidator} from './fdp-user-auth-register.directive';

@Component({
  selector: 'app-fdp-user-auth-register',
  templateUrl: './fdp-user-auth-register.component.html',
  styleUrls: ['../fdp-user-auth.component.scss'],
})
export class FdpUserAuthRegisterComponent implements OnInit {

  @Output() onRegisterDone: EventEmitter<boolean> = new EventEmitter();
  public userRegister: FdpUserAuthRegister;
  public userRegisterFormGroup: FormGroup;
  public error: string;

  /** Le mot de passe est caché ou affiché */
  public showPassword: boolean;

  constructor(private fdpAuthService: FdpUserAuthService) {
    this.showPassword = false;
    this.userRegister = new FdpUserAuthRegister('', '', '', '');
    this.userRegisterFormGroup = new FormGroup({
      register_email: new FormControl(this.userRegister.email, [
        Validators.required,
        Validators.email,
      ]),
      register_username: new FormControl(this.userRegister.username, [
        Validators.required,
        Validators.minLength(3),
      ]),
      register_password: new FormControl(this.userRegister.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
      register_confirmPassword: new FormControl(this.userRegister.confirmPassword, [
        // Validators.required,
        confirmPasswordValidator(this.userRegister),
      ]),
    });

  }

  ngOnInit() {
  }

  public register() {

    this.fdpAuthService.register(this.userRegister.email, this.userRegister.username, this.userRegister.password)
      .subscribe(({success, error}) => {
          if (success) {
            this.onRegisterDone.emit(true);
          } else {
            // this.error = error;
            this.error = "Cet utilisateur éxiste déjà";
          }
        },
        err => {
          console.log('error de gros enculé sa mère qui sais pas les gérer like a biatchedefdp');
          console.log(err);
        });
    this.fdpAuthService.login(this.userRegister.username, this.userRegister.password);

    return false;
  }

}
