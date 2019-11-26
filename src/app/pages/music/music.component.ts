import {Component, OnDestroy, OnInit} from '@angular/core';
import {SeoHeadService} from '../../seo/seo-head/seo-head.service';
import {LayoutService} from '../../layout/layout.service';
import {Metas} from '../../seo/seo-head/seo-head';
import {Router} from '@angular/router';

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
  }

  ngOnInit() {
    this.updateMetas();
    this.layoutService.footerVisibility(false);
  }

  ngOnDestroy(): void {
    this.layoutService.footerVisibility(true);
  }

  updateMetas() {
    this.seoHeadService.setHead(
      new Metas(
        'Les Meilleures playlists de musique',
        'Musique',
        'Écoute du son',
        'clapette',
        this.router.url,
      ),
    );
  }

}
