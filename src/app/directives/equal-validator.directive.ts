import {Directive, forwardRef, Attribute} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true},
  ],
})
export class EqualValidatorDirective implements Validator {
  constructor(
    @Attribute('validateEqual') public validateEqual: string,
    @Attribute('reverse') public reverse: string,
  ) {
  }

  private get isReverse() {
    if (!this.reverse) {
      return false;
    }
    return this.reverse === 'true';
  }

  validate(control: AbstractControl): { [key: string]: any } {
    const validate = control.value;
    const equals = control.root.get(this.validateEqual);
    if (equals && validate !== equals.value && !this.isReverse) {
      return {
        validateEqual: false,
      };
    }
    if (equals && validate === equals.value && this.isReverse) {
      delete equals.errors.validateEqual;
      if (!Object.keys(equals.errors).length) {
        equals.setErrors(null);
      }
    }
    if (equals && validate !== equals.value && this.isReverse) {
      equals.setErrors({validateEqual: false});
    }

    return null;
  }
}
