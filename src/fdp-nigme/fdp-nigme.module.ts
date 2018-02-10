import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpNigmeRoutingModule} from "./fdp-nigme.routing.module";
import {FdpNigmeComponent} from "./fdp-nigme.component";

@NgModule({
  declarations: [
    FdpNigmeComponent,
  ],
  exports: [
    FdpNigmeComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpNigmeRoutingModule,
  ],
})

export class FdpNigmeModule {}
