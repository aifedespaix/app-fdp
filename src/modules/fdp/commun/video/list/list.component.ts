import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'app-fdp-video-list',
  templateUrl: './list.component.html',
})
export class VideoListComponent {

  @Input() public videos: Video[];
  @Output() private changeVideo: EventEmitter<Video> = new EventEmitter();

  constructor() {
    this.videos = [];
  }

  public loadVideo(video: Video) {
    this.changeVideo.emit(video);
  }
}
