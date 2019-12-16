import {Component, OnInit} from '@angular/core';
import {Metas} from '../../services/seo-head';
import {Router} from '@angular/router';
import {IIndexCard} from './index-card';
import {getUndefinedPictureMock} from '../../model/picture/picture.mocks';
import {PageService} from '../../services/page/page.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

  public cards: IIndexCard[];

  constructor(
    private readonly pageService: PageService,
    private readonly router: Router,
  ) {
    pageService.layout();
  }

  ngOnInit() {
    this.updateHead();
    this.loadCards();
  }

  private updateHead() {
    this.pageService.metas(
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
        picture: getUndefinedPictureMock(),
        link: '/blog',
        // tslint:disable-next-line:max-line-length
        description: `Un blog technique pour apprendre plein de choses dans le domaine du web moderne. Javascript, nodejs, Typescript, graphql, c'est grave cool !`,
      },
      {
        title: 'Formations',
        picture: getUndefinedPictureMock(),
        link: '/learn',
        // tslint:disable-next-line:max-line-length
        description: `Apprendre à developper des applications web dans des technologies modernes.`,
      },
      {
        title: 'Musiques',
        picture: getUndefinedPictureMock(),
        link: '/music',
        // tslint:disable-next-line:max-line-length
        description: `Écoute ces sons poto : Youtube, Spotify, Apple Music et Deezer, y'en a pour tout le monde.`,
      },
      {
        title: 'Box',
        picture: getUndefinedPictureMock(),
        link: '/box',
        // tslint:disable-next-line:max-line-length
        description: `Une sound box, avec tout ce que tu veux. Upload un son, une image et t'es good frèro`,
      },
      {
        title: 'Shop',
        picture: getUndefinedPictureMock(),
        link: '/shop',
        // tslint:disable-next-line:max-line-length
        description: `Des vêtements grave stylés pour tous les goûts...`,
      },
      {
        title: 'Glitch',
        picture: getUndefinedPictureMock(),
        link: '/glitch',
        // tslint:disable-next-line:max-line-length
        description: `Des tutos glitchs les plus fun pour les meilleurs jeux vidéos`,
      },
    ];
  }
}
