import { NgModule } from '@angular/core';
import { BoxIndexComponent } from './box-index/box-index.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'box',  component: BoxIndexComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BoxRoutingModule { }
