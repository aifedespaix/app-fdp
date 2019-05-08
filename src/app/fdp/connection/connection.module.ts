import {NgModule} from '@angular/core';
import {UrlUnsecurePipe} from './urlUnsecure.pipe';

@NgModule({
  declarations: [
    UrlUnsecurePipe,
  ],
  exports: [
    UrlUnsecurePipe,
  ],
  imports: [],
  providers: [],
})

export class ConnectionModule {
}
