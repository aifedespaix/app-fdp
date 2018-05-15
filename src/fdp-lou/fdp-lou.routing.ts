import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpLouComponent} from "./fdp-lou.component";
import {FdpLouP1Component} from './fdp-lou-p1/fdp-lou-p1.component';

const FDP_LOU_ROUTES: Routes = [{
  path: 'LouPD',
  component: FdpLouComponent,
  data: {title: 'LouPD'},
  children: [
    {
      path: 'a',
      component: FdpLouP1Component,
      outlet: 'FdpLou',
    },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(FDP_LOU_ROUTES),
  ],
  exports: [RouterModule],
})
export class FdpLouRouting {}
