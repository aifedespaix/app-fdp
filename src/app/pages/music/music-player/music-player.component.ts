import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlaylistYoutubeType} from '../../../model/_generated/graphql.schema';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {

  public playlist: PlaylistYoutubeType;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.playlist = this.route.snapshot.data.playlist;
  }

  public playlistUrl() {
    return `https://www.youtube.com/embed/videoseries?list=${this.playlist.youtubeId}`;
  }

}
