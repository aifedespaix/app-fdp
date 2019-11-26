import {AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {LayoutService} from '../../services/layout.service';
import {Metas} from '../../seo/seo-head/seo-head';
import {Router} from '@angular/router';
import {YOUTUBE_PLAYLISTS} from '../../model/playlist/tests/playlists.mock';
import {PlaylistModelService} from '../../model/playlist/playlist-model.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit, OnDestroy {


  constructor(
    private readonly seoHeadService: SeoHeadService,
    private readonly layoutService: LayoutService,
    private readonly router: Router,
  ) {
    layoutService.footerVisibility(false);
  }

  ngOnInit() {
    this.updateMetas();
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  updateMetas() {
    this.seoHeadService.setHead(
      new Metas(
        'Les Meilleures playlists de musique of da world bitch',
        'Musique',
        `Écoute ces sons poto, Youtube Spotify, Apple Music et Deezer, y'a tout partout`,
        'clapette',
        this.router.url,
      ),
    );
  }

}
