import {NgModule} from '@angular/core';

import {FdpMaterialModule} from '../fdp-material/fdp-material.module';
import {FdpIndexRoutingModule} from './fdp-index.routing.module';
import {FdpIndexComponent} from './fdp-index.component';
import {FdpUserModule} from '../fdp-user/fdp-user.module';

@NgModule({
  declarations: [
    FdpIndexComponent,
  ],
  exports: [
    FdpIndexComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpIndexRoutingModule,
    FdpUserModule,
  ],
})

export class FdpIndexModule {
}
