import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FdpVideo} from '../fdp-video';

@Component({
  selector: 'app-fdp-video-list',
  templateUrl: './fdp-video-list.component.html',
  styleUrls: ['./fdp-video-list.component.scss']
})
export class FdpVideoListComponent implements OnInit {

  @Input() videos: FdpVideo[];
  @Output() onLoadVideo = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public loadVideo(id: number) {
    this.onLoadVideo.emit(id);
  }
}
