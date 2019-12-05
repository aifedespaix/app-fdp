import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MusicIndexComponent} from './music-index/music-index.component';
import {MusicYoutubeComponent} from './music-youtube/music-youtube.component';
import {MusicStreamingComponent} from './music-streaming/music-streaming.component';

const routes: Routes = [
  {
    path: '',
    component: MusicIndexComponent,
  },
  {
    path: 'streaming',
    component: MusicStreamingComponent,
    data: {
      animation: 'OnBottom',
    },
  },
  {
    path: 'youtube',
    component: MusicYoutubeComponent,
    data: {
      animation: 'OnTop',
    },
    children: [{
      path: '**',
      component: MusicYoutubeComponent,
    }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicRoutingModule {
}
