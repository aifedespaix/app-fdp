import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpMusicComponent} from "./fdp-music.component";

const MUSIC_ROUTES: Routes = [
  {path: 'music', component: FdpMusicComponent, data: {title: 'Musique'}},
  ];

@NgModule({
  imports: [
    RouterModule.forChild(MUSIC_ROUTES),
  ],
  exports: [
  ]
})
export class FdpMusicRoutingModule {}
