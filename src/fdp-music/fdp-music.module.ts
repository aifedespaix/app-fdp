import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpMusicRoutingModule} from "./fdp-music.routing.module";
import {FdpMusicComponent} from "./fdp-music.component";

@NgModule({
  declarations: [
    FdpMusicComponent,
  ],
  exports: [
    FdpMusicComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpMusicRoutingModule,
  ],
})

export class FdpMusicModule {}
