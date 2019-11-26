import {Component, OnInit} from '@angular/core';
import {YOUTUBE_PLAYLISTS} from '../../../model/playlist/tests/playlists.mock';
import {PlaylistModelService} from '../../../model/playlist/playlist-model.service';

@Component({
  selector: 'app-music-youtube',
  templateUrl: './music-youtube.component.html',
  styleUrls: ['./music-youtube.component.scss'],
})
export class MusicYoutubeComponent implements OnInit {

  public playlists = YOUTUBE_PLAYLISTS;

  constructor(
    private readonly playlistModelService: PlaylistModelService,
  ) {
  }

  ngOnInit() {
    this.playlists = this.playlistModelService.youtubePlaylists();
  }

}
