import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpLouRouting} from "./fdp-lou.routing";
import {FdpLouComponent} from "./fdp-lou.component";
import {FdpLouP1Component} from './fdp-lou-p1/fdp-lou-p1.component';

@NgModule({
  declarations: [
    FdpLouComponent,
    FdpLouP1Component
  ],
  exports: [
    FdpLouComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpLouRouting,
  ],
  bootstrap: [FdpLouComponent]
})

export class FdpLouModule {}
