import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpLouComponent} from "./fdp-lou.component";
import {FdpLouP1Component} from './fdp-lou-p1/fdp-lou-p1.component';

const FDP_LOU_ROUTES: Routes = [{
  path: 'LouPD',
  children: [
    {path: '', component: FdpLouComponent, data: {title: 'Lou PD'}},
    {path: 'iuzfdsfv', component: FdpLouP1Component, data: {title: 'Lou Jeu 1'}},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(FDP_LOU_ROUTES),
  ],
  exports: [RouterModule],
})
export class FdpLouRouting {}
