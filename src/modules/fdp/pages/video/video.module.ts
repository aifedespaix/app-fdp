import {NgModule} from '@angular/core';
import {PageVideoComponent} from './index/video.component';
import {VideoRoutingModule} from './video.routing.module';
import {MaterialModule} from '../../commun/material/material.module';
import {CommunModule} from '../../commun/commun.module';
import {VideoService} from './index/video.service';

@NgModule({
  declarations: [PageVideoComponent],
  exports: [PageVideoComponent],
  imports: [MaterialModule, VideoRoutingModule, CommunModule],
  entryComponents: [],
  providers: [VideoService],
})
export class VideoModule {
}
