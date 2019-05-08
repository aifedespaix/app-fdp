import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from './playlist.component';

const MUSIC_ROUTES: Routes = [
  {path: 'music', component: PlaylistComponent, data: {title: 'Musique'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(MUSIC_ROUTES),
  ],
  exports: [],
})
export class PlaylistRoutingModule {
}
