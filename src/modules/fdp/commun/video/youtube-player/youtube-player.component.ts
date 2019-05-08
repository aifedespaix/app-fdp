import {Component, Input} from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'app-fdp-video-player',
  templateUrl: './youtube-player.component.html',
})
export class YoutubePlayerComponent {
  @Input() video: Video;
}
