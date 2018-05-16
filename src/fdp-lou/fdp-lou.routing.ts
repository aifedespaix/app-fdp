import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpLouComponent} from './fdp-lou.component';
import {FdpLouP1Component} from './fdp-lou-p1/fdp-lou-p1.component';
import {FdpLouP2Component} from './fdp-lou-p2/fdp-lou-p2.component';
import {FdpLouP3Component} from './fdp-lou-p3/fdp-lou-p3.component';
import {FdpLouP4Component} from './fdp-lou-p4/fdp-lou-p4.component';
import {FdpLouP5Component} from './fdp-lou-p5/fdp-lou-p5.component';
import {FdpLouP6Component} from './fdp-lou-p6/fdp-lou-p6.component';
import {FdpLouP7Component} from './fdp-lou-p7/fdp-lou-p7.component';
import {FdpLouP8Component} from './fdp-lou-p8/fdp-lou-p8.component';
import {FdpLouP9Component} from './fdp-lou-p9/fdp-lou-p9.component';
import {FdpLouGgComponent} from './fdp-lou-gg/fdp-lou-gg.component';

const FDP_LOU_ROUTES: Routes = [{
  path: 'LouPD',
  children: [
    {path: '', component: FdpLouComponent, data: {title: 'Lou PD'}},
    {path: 'iuzfdsfv', component: FdpLouP1Component, data: {title: 'Lou Jeu 1'}},
    {path: 'etrvyerv', component: FdpLouP2Component, data: {title: 'Lou Jeu 2'}},
    {path: 'sdffdghg', component: FdpLouP3Component, data: {title: 'Lou Jeu 3'}},
    {path: 'etrsdfgh', component: FdpLouP4Component, data: {title: 'Lou Jeu 4'}},
    {path: 'sdfhsdfh', component: FdpLouP5Component, data: {title: 'Lou Jeu 5'}},
    {path: 'yurkrtxc', component: FdpLouP6Component, data: {title: 'Lou Jeu 6'}},
    {path: 'kiykrtyu', component: FdpLouP7Component, data: {title: 'Lou Jeu 7'}},
    {path: 'ggvezrsd', component: FdpLouP8Component, data: {title: 'Lou Jeu 8'}},

    {path: 'dsl', component: FdpLouP9Component, data: {title: 'DSL LOU'}},
    {path: 'dsl/ggLoupMDR', component: FdpLouGgComponent, data: {title: 'BON NANIV'}},

  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(FDP_LOU_ROUTES),
  ],
  exports: [RouterModule],
})
export class FdpLouRouting {
}
