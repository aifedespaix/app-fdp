import { NgModule } from "@angular/core";

import { FdpMaterialModule } from "../fdp-material/fdp-material.module";
import { FdpVideoRoutingModule } from "./fdp-video.routing.module";
import { FdpVideoComponent } from "./fdp-video.component";
import { FdpVideoListComponent } from "./fdp-video-list/fdp-video-list.component";

@NgModule({
  declarations: [FdpVideoComponent, FdpVideoListComponent],
  exports: [FdpVideoComponent],
  imports: [FdpMaterialModule, FdpVideoRoutingModule]
})
export class FdpVideoModule {}
