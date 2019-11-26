import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MusicComponent} from './music.component';
import {MusicPlayerComponent} from './music-player/music-player.component';
import {YOUTUBE_PLAYLISTS} from '../../model/playlist/tests/playlists.mock';
import {MusicYoutubeComponent} from './music-youtube/music-youtube.component';
import {MusicStreamingComponent} from './music-streaming/music-streaming.component';

const routes: Routes = [
  {
    path: '',
    component: MusicComponent,
  },
  {
    path: 'streaming',
    component: MusicStreamingComponent,
  },
  {
    path: 'youtube',
    component: MusicYoutubeComponent,
    children: YOUTUBE_PLAYLISTS
      .map((p) => {
        return {
          path: p.title,
          component: MusicPlayerComponent,
          outlet: 'youtube',
          data: {playlist: p},
        };
      }),
  },
];
console.log(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRoutingModule {
}
