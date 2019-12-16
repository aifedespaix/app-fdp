import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../../../services/youtube/youtube.service';
import {Router} from '@angular/router';
import {Metas} from '../../../services/seo-head';
import {Logo} from '../../../services/layout/logo';
import {PageService} from '../../../services/page/page.service';

@Component({
  selector: 'app-glitch-index',
  templateUrl: './glitch-index.component.html',
  styleUrls: ['./glitch-index.component.scss'],
})
export class GlitchIndexComponent implements OnInit {

  public videos: any;

  constructor(
    public readonly youtubeService: YoutubeService,
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    pageService.layout(true, Logo.Aifedesglitch);
  }

  ngOnInit() {
    this.updateHead();
    this.youtubeService.videos('PL5KiMRVZeiNIMqqT5F1JOmCaylorla37s')
      .subscribe(
        (videos: any) => {
          this.videos = videos.items;
        },
      );
  }

  private updateHead() {
    this.pageService.metas(
      new Metas(
        'Vidéos de la chaîne youtube aifedesglitch, spécialisée dans les bugs de jeux vidéo',
        'Glitch',
        // tslint:disable-next-line:max-line-length
        `Chaîne spécialisée dans les glitchs et bugs de jeu vidéo. Les meilleures exploitations de failles y sont présentées pour vos jeux favoris. Des tutos simples précis et complets.`,
        'aife',
        this.router.url,
      ),
    );
  }
}
