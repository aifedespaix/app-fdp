import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeEmbedComponent } from './youtube-embed/youtube-embed.component';
import {PipesModule} from '../../pipes/pipes.module';



@NgModule({
  declarations: [YoutubeEmbedComponent],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    YoutubeEmbedComponent,
  ],
})
export class YoutubeModule { }
