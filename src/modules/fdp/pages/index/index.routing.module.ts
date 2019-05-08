import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const INDEX_ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(INDEX_ROUTES)],
  exports: []
})
export class IndexRoutingModule {}
