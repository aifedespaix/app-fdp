import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GlitchRoutingModule} from './glitch-routing.module';
import {GlitchIndexComponent} from './glitch-index/glitch-index.component';
import {ListModule} from '../../components/list/list.module';
import {YoutubeModule} from '../../components/youtube/youtube.module';
import {CardModule} from '../../components/card/card.module';
import {PictureModule} from '../../components/picture/picture.module';


@NgModule({
  declarations: [
    GlitchIndexComponent,
  ],
  imports: [
    CommonModule,
    GlitchRoutingModule,
    ListModule,
    YoutubeModule,
    CardModule,
    PictureModule,
  ],
})
export class GlitchModule {
}
