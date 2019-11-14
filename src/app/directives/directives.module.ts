import {NgModule} from '@angular/core';
import {BackgroundImageDirective} from './background-image.directive';
import {EqualValidatorDirective} from './equal-validator.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BackgroundImageDirective,
    EqualValidatorDirective,
  ],
  exports: [
    BackgroundImageDirective,
    EqualValidatorDirective,
  ],
})
export class DirectivesModule {
}
