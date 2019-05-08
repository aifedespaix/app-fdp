import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth.service';
import {UserAuthRegister} from './register';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPasswordValidator} from './register.directive';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() registerDone: EventEmitter<boolean> = new EventEmitter();
  public userRegister: UserAuthRegister;
  public userRegisterFormGroup: FormGroup;

  /** Le mot de passe est caché ou affiché */
  public showPassword: boolean;

  constructor(private authService: AuthService, public snackBar: MatSnackBar) {
    this.showPassword = false;
    this.userRegister = new UserAuthRegister('', '', '', '');
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
      register_confirmPassword: new FormControl(
        this.userRegister.confirmPassword,
        [
          // Validators.required,
          confirmPasswordValidator(this.userRegister, this.showPassword),
        ],
      ),
    });
  }

  ngOnInit() {
  }

  public register() {
    if (this.userRegisterFormGroup.valid) {
      this.authService
        .register(this.userRegister.email, this.userRegister.username, this.userRegister.password)
        .subscribe(
          () => {
            this.snackBar.open('Inscription réussie, vous êtes connecté', '', {duration: 1500});
            this.registerDone.emit(true);
          },
          error => {
            this.snackBar.open(error.graphQLErrors.map(x => x.message), '', {duration: 1500});
          },
        );
    }
  }
}
