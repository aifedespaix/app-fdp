import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpIndexComponent} from "./fdp-index.component";

const INDEX_ROUTES: Routes = [
    {path: '', component: FdpIndexComponent, data: {title: 'Accueil'}},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(INDEX_ROUTES),
  ],
  exports: [
  ]
})
export class FdpIndexRoutingModule {}
