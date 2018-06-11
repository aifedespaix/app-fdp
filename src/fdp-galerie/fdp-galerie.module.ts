import { NgModule } from "@angular/core";

import { FdpMaterialModule } from "../fdp-material/fdp-material.module";
import { FdpGalerieComponent } from "./fdp-galerie.component";
import { FdpGalerieRoutingModule } from "./fdp-galerie.routing.module";

@NgModule({
  declarations: [FdpGalerieComponent],
  exports: [FdpGalerieComponent],
  imports: [FdpMaterialModule, FdpGalerieRoutingModule]
})
export class FdpGalerieModule {}
