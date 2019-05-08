import {NgModule} from '@angular/core';
import {YoutubePlayerComponent} from './video/youtube-player/youtube-player.component';
import {YoutubePlayerDialogComponent} from './video/youtube-player/youtube-player.dialog.component';
import {YoutubePlayerPipe} from './video/youtube-player/youtube-player.pipe';
import {TagComponent} from './tag/tag.component';
import {MaterialModule} from './material/material.module';
import {SoundComponent} from './sound/sound.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MailService} from './mail/mail.service';
import {FileComponent} from './file/file.component';
import {BrowserModule} from '@angular/platform-browser';
import {BackgroundImageDirective} from './css/backgroundImage.directive';
import {UrlUnsecurePipe} from './connection/urlUnsecure.pipe';
import {UrlService} from './url.service';
import {YoutubeMiniaturePipe} from './video/youtube-player/youtube-miniature.pipe';
import {VideoComponent} from './video/index/video.component';
import {VideoListComponent} from './video/list/list.component';
import {TimeService} from './time/time.service';

@NgModule({
  declarations: [
    YoutubePlayerComponent,
    YoutubePlayerDialogComponent,
    YoutubePlayerPipe,
    TagComponent,
    SoundComponent,
    FileComponent,
    BackgroundImageDirective,
    UrlUnsecurePipe,
    SoundComponent,
    YoutubeMiniaturePipe,
    VideoComponent,
    VideoListComponent,
  ],
  exports: [
    YoutubePlayerComponent,
    YoutubePlayerDialogComponent,
    YoutubePlayerPipe,
    TagComponent,
    SoundComponent,
    FileComponent,
    BackgroundImageDirective,
    UrlUnsecurePipe,
    SoundComponent,
    YoutubeMiniaturePipe,
    VideoComponent,
  ],
  imports: [
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    YoutubePlayerDialogComponent,
  ],
  providers: [MailService, UrlService, TimeService],
})
export class CommunModule {
}
