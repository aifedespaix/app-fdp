import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SoundBoxIndexComponent} from './sound-box-index/sound-box-index.component';
import {SoundBoxEditorComponent} from './sound-box-editor/sound-box-editor.component';

const routes: Routes = [
  {path: '', component: SoundBoxIndexComponent},
  {path: ':id/:title', component: SoundBoxIndexComponent},
  {path: 'create', component: SoundBoxEditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundBoxRoutingModule {
}
