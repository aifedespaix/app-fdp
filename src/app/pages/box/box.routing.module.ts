import { NgModule } from '@angular/core';
import { BoxIndexComponent } from './box-index/box-index.component';
import {RouterModule, Routes} from '@angular/router';
import {BoxDetailComponent} from './box-detail/box-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BoxIndexComponent
  },
  {
    path: ':id/:title',
    component: BoxDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxRoutingModule { }
