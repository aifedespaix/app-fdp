import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxComponent } from './box.component';
import {BoxCreateComponent} from './box-create/box-create.component';

const routes: Routes = [
  { path: '', component: BoxComponent },
  { path: 'create', component: BoxCreateComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxRoutingModule { }
