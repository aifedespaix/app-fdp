import {Component, OnDestroy, OnInit} from '@angular/core';
import {MUSIC_STREAMING} from './music-streaming';
import {PlaylistStreamingType} from '../../../model/_generated/graphql.schema';
import {LayoutService} from '../../../services/layout.service';

@Component({
  selector: 'app-music-streaming',
  templateUrl: './music-streaming.component.html',
  styleUrls: ['./music-streaming.component.scss']
})
export class MusicStreamingComponent implements OnInit, OnDestroy {

  public playlists: PlaylistStreamingType[];
  public plateformId: number;
  public playlistId: number;

  constructor(
    private readonly layoutService: LayoutService,
  ) {
    this.layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.playlists = MUSIC_STREAMING;
    this.plateformId = 0;
    this.playlistId = 0;
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }



}
