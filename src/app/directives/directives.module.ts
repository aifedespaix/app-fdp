import {NgModule} from '@angular/core';
import {BackgroundImageDirective} from './background-image.directive';
import {EqualValidatorDirective} from './equal-validator.directive';
import { ScrollDirective } from './scroll.directive';

@NgModule({
  declarations: [
    BackgroundImageDirective,
    EqualValidatorDirective,
    ScrollDirective,
  ],
  exports: [
    BackgroundImageDirective,
    EqualValidatorDirective,
    ScrollDirective,
  ],
})
export class DirectivesModule {
}
