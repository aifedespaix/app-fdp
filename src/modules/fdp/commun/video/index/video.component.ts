import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../video';

@Component({
  selector: 'app-fdp-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() public videos: Video[];
  @Input() public title: string;
  public video: Video;

  constructor() {
    this.video = new Video();
    this.videos = [];
    this.title = '';
  }

  ngOnInit(): void {
    if (this.videos.length > 0) {
      this.video = this.videos[0];
    }
  }

  public changeVideo(video: Video) {
    this.video = video;
  }

}
