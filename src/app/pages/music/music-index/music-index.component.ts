import {Component, OnDestroy, OnInit} from '@angular/core';
import {SeoHeadService} from '../../../services/seo-head.service';
import {LayoutService} from '../../../services/layout.service';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';

@Component({
  templateUrl: './music-index.component.html',
  styleUrls: ['./music-index.component.scss'],
})
export class MusicIndexComponent implements OnInit, OnDestroy {

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

  private updateMetas() {
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
