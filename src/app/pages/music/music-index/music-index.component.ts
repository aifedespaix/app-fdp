import {Component, OnDestroy, OnInit} from '@angular/core';
import {SeoHeadService} from '../../../services/seo-head.service';
import {LayoutService} from '../../../services/layout/layout.service';
import {Metas} from '../../../services/seo-head';
import {Router} from '@angular/router';
import {PageService} from '../../../services/page/page.service';

@Component({
  templateUrl: './music-index.component.html',
  styleUrls: ['./music-index.component.scss'],
})
export class MusicIndexComponent implements OnInit {

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    pageService.layout(false);
  }

  ngOnInit() {
    this.updateMetas();
  }

  private updateMetas() {
    this.pageService.metas(
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
