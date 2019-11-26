import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.scss'],
})
export class YoutubeEmbedComponent implements OnInit {

  @Input() youtubeId: string;
  @Input() type: 'video' | 'playlist';

  constructor() {
  }

  ngOnInit() {
  }

  public playlistUrl() {
    if (this.type === 'video') {
      return `https://www.youtube.com/embed/${this.youtubeId}`;
    } else {
      return `https://www.youtube.com/embed/videoseries?list=${this.youtubeId}`;
    }
  }


}
