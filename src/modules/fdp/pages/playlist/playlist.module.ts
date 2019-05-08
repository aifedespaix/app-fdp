import {NgModule} from '@angular/core';

import {PlaylistRoutingModule} from './playlist.routing.module';
import {PlaylistComponent} from './playlist.component';
import {MaterialModule} from '../../commun/material/material.module';
import {CommunModule} from '../../commun/commun.module';
import {VideoModule} from '../video/video.module';

@NgModule({
  declarations: [
    PlaylistComponent,
  ],
  exports: [
    PlaylistComponent,
  ],
  imports: [
    MaterialModule,
    PlaylistRoutingModule,
    CommunModule,
    VideoModule,
  ],
})

export class PlaylistModule {}
