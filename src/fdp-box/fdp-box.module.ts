import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpBoxRoutingModule} from "./fdp-box.routing.module";
import {FdpBoxComponent} from "./fdp-box.component";
import {FdpBoxSoundComponent} from './fdp-box-sound/fdp-box-sound.component';

@NgModule({
  declarations: [
    FdpBoxComponent,
    FdpBoxSoundComponent,
  ],
  exports: [
    FdpBoxComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpBoxRoutingModule,
  ],
})

export class FdpBoxModule {}
