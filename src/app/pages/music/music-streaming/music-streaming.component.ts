import {Component, OnDestroy, OnInit} from '@angular/core';
import {MUSIC_STREAMING} from './music-streaming';
import {PlaylistStreamingType} from '../../../model/_generated/graphql.schema';
import {LayoutService} from '../../../services/layout.service';
import {SafePipe} from '../../../pipes/safe.pipe';
import {Metas} from '../../../services/seo-head';
import {SeoHeadService} from '../../../services/seo-head.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-streaming',
  templateUrl: './music-streaming.component.html',
  styleUrls: ['./music-streaming.component.scss'],
})
export class MusicStreamingComponent implements OnInit, OnDestroy {

  public playlists: PlaylistStreamingType[];
  public plateformId: number;
  public playlistId: number;

  constructor(
    private readonly layoutService: LayoutService,
    private readonly seoHeadService: SeoHeadService,
    private readonly router: Router,
  ) {
    this.layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.playlists = MUSIC_STREAMING;
    this.plateformId = 0;
    this.playlistId = 0;
    this.updateMetas();
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  private updateMetas() {
    this.seoHeadService.setHead(
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
