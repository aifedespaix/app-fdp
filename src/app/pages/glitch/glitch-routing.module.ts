import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlitchIndexComponent } from './glitch-index/glitch-index.component';

const routes: Routes = [{ path: '', component: GlitchIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlitchRoutingModule { }
