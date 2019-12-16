import {Component, OnInit} from '@angular/core';
import {MUSIC_STREAMING} from './music-streaming';
import {PlaylistStreamingType} from '../../../model/_generated/graphql.schema';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';
import {PageService} from '../../../services/page/page.service';

@Component({
  selector: 'app-music-streaming',
  templateUrl: './music-streaming.component.html',
  styleUrls: ['./music-streaming.component.scss'],
})
export class MusicStreamingComponent implements OnInit {

  public playlists: PlaylistStreamingType[];
  public plateformId: number;
  public playlistId: number;

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    this.pageService.layout(false);
  }

  ngOnInit() {
    this.playlists = MUSIC_STREAMING;
    this.plateformId = 0;
    this.playlistId = 0;
    this.updateMetas();
  }

  private updateMetas() {
    this.pageService.metas(
      new Metas(
        'Les Meilleures playlists Kegab',
        'Playlists',
        `Peu importe la plateform, Spotify, Apple Music, Deezer, y'en a pour tout le monde`,
        '@valerdamidO',
        this.router.url,
      ),
    );
  }

}
