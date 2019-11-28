import {Component, OnInit} from '@angular/core';
import {SeoHeadService} from '../../services/seo-head.service';
import {Metas} from '../../services/seo-head';
import {Router} from '@angular/router';
import {IIndexCard} from './index-card';
import {getPictureMock} from '../../model/picture/tests/picture.mocks';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  public cards: IIndexCard[];

  constructor(
    private readonly headService: SeoHeadService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.updateHead();
    this.loadCards();
  }


  private updateHead() {
    this.headService.setHead(
      new Metas(
        `Page d'accueil`,
        `Accueil`,
        'Bienvenue sur aifedespaix.com, le site des fdp.',
        'clapette',
        this.router.url,
      ),
    );
  }

  private loadCards() {
    this.cards = [
      {
        title: 'Blog',
        picture: getPictureMock(),
        link: '/blog',
        // tslint:disable-next-line:max-line-length
        description: `Un blog technique pour apprendre plein de choses dans le domaine du web moderne. Javascript, nodejs, Typescript, graphql, c'est grave cool !`,
      },
      {
        title: 'Formations',
        picture: getPictureMock(),
        link: '/learn',
        // tslint:disable-next-line:max-line-length
        description: `Apprendre à developper des applications web dans des technologies modernes.`,
      },
      {
        title: 'Musiques',
        picture: getPictureMock(),
        link: '/music',
        // tslint:disable-next-line:max-line-length
        description: `Écoute ces sons poto : Youtube, Spotify, Apple Music et Deezer, y'en a pour tout le monde.`,
      },
    ];
  }
}
