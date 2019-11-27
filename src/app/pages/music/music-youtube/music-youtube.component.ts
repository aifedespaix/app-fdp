import {Component, OnDestroy, OnInit} from '@angular/core';
import {YOUTUBE_PLAYLISTS} from '../../../model/playlist/tests/playlists.mock';
import {PlaylistModelService} from '../../../model/playlist/playlist-model.service';
import {LayoutService} from '../../../services/layout.service';
import {Metas} from '../../../seo/seo-head/seo-head';
import {SeoHeadService} from '../../../seo/seo-head/seo-head.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-youtube',
  templateUrl: './music-youtube.component.html',
  styleUrls: ['./music-youtube.component.scss'],
})
export class MusicYoutubeComponent implements OnInit, OnDestroy {

  public playlists = YOUTUBE_PLAYLISTS;

  constructor(
    private readonly playlistModelService: PlaylistModelService,
    private readonly layoutService: LayoutService,
    private readonly seoHeadService: SeoHeadService,
    private readonly router: Router,
  ) {
    layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.playlists = this.playlistModelService.youtubePlaylists();
    this.updateMetas();
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(false);
  }

  private updateMetas() {
    this.seoHeadService.setHead(
      new Metas(
        'Les playlists de aifedespaix',
        'Playlists Youtube',
        `Des Playlists Youtubes avec des clips de "Qualitay"`,
        '@aifedespaix',
        this.router.url,
      ),
    );
  }
}
