import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpVideoComponent} from "./fdp-video.component";

const VIDEO_ROUTES: Routes = [
  {path: 'video', component: FdpVideoComponent, data: {title: 'Vidéo'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(VIDEO_ROUTES),
  ],
  exports: [
    RouterModule
  ],
})
export class FdpVideoRoutingModule {}
