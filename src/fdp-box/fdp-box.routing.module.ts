import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpBoxComponent} from "./fdp-box.component";

const BOX_ROUTES: Routes = [
  {path: 'box', component: FdpBoxComponent, data: {title: 'Box'}},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(BOX_ROUTES),
  ],
  exports: [
  ]
})
export class FdpBoxRoutingModule {}
