import {NgModule} from '@angular/core';
import {SafePipe} from './safe.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    SafePipe,
    ReversePipe,
  ],
  exports: [
    SafePipe,
    ReversePipe,
  ],
})
export class PipesModule {
}
