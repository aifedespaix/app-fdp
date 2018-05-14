import {AbstractControl, ValidatorFn} from '@angular/forms';
import {FdpUserAuthRegister} from './fdp-user-auth-register';

// todo dsl directive pas créée connais pas mdr
export function confirmPasswordValidator(user: FdpUserAuthRegister, showPassword: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isConfirmedPassword = user.password === control.value;
    return isConfirmedPassword || showPassword ? null : {'confirmPassword': {value: user.password}};
  };
}
