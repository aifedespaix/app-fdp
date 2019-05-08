import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoxComponent} from './index/box.component';
import {DetailComponent} from './detail/detail.component';

const BOX_ROUTES: Routes = [
  {
    path: 'soundBox',
    children: [
      {
        path: 'boxes', component: BoxComponent,
      },
      {
        path: 'box/:id/:title',
        component: DetailComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(BOX_ROUTES)],
  exports: []
})
export class BoxRoutingModule {
}
