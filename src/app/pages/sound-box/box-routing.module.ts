import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SoundBoxIndexComponent} from './sound-box-index/sound-box-index.component';
import {BoxCreateComponent} from './sound-box-create/box-create.component';

const routes: Routes = [
  {path: '', component: SoundBoxIndexComponent},
  {path: ':id/:title', component: SoundBoxIndexComponent},
  {path: 'create', component: BoxCreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxRoutingModule {
}
