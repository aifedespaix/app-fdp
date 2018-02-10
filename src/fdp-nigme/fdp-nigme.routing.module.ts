import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpNigmeComponent} from "./fdp-nigme.component";

const NIGME_ROUTES: Routes = [
  {path: 'nigme', component: FdpNigmeComponent, data: {title: 'Nigme'}},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(NIGME_ROUTES),
  ],
  exports: [
  ]
})
export class FdpNigmeRoutingModule {}
