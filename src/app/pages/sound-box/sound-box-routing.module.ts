import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SoundBoxIndexComponent} from './sound-box-index/sound-box-index.component';
import {SoundBoxEditorComponent} from './sound-box-editor/sound-box-editor.component';
import {PendingChangesGuard} from '../../guards/pending-changes.guard';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {path: '', component: SoundBoxIndexComponent},
  {
    path: ':id/:title',
    component: SoundBoxIndexComponent,
  },
  {
    path: 'new', component: SoundBoxEditorComponent,
    canDeactivate: [PendingChangesGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id/:title', component: SoundBoxEditorComponent,
    canDeactivate: [PendingChangesGuard],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundBoxRoutingModule {
}
