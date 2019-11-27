import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MusicRoutingModule} from './music-routing.module';
import {MusicComponent} from './music.component';
import {YoutubeModule} from '../../components/youtube/youtube.module';
import {MusicPlayerComponent} from './music-player/music-player.component';
import {PlaylistModelService} from '../../model/playlist/playlist-model.service';
import { MusicStreamingComponent } from './music-streaming/music-streaming.component';
import { MusicYoutubeComponent } from './music-youtube/music-youtube.component';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MusicComponent,
    MusicPlayerComponent,
    MusicStreamingComponent,
    MusicYoutubeComponent,
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    YoutubeModule,
    PipesModule,
  ],
  providers: [
    PlaylistModelService,
  ],
})
export class MusicModule {
}
