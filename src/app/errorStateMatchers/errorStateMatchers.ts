import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export class IsErrorMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    console.log(!!(control && control.invalid && (control.dirty || control.touched || isSubmitted)));
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/**
 * Exemple useless ^^"
 */
// export class LengthMatcher implements ErrorStateMatcher {
//   private readonly minLength: number;
//   private readonly maxLength: number;
//
//   constructor(minLength: number, maxLength: number = null) {
//     this.minLength = minLength;
//     this.maxLength = maxLength;
//   }
//
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     let isValid = true;
//     if (control.value) {
//       const length = control.value.length;
//       isValid = length >= this.minLength && (!this.maxLength || length < this.maxLength);
//     }
//     return !isValid;
//   }
// }
