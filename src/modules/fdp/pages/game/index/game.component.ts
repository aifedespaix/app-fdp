import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  templateUrl: './game.component.html',
})
export class PageGameComponent {

  constructor(private title: Title,
              private meta: Meta) {
    this.title.setTitle('Game - aifedespaix');
    this.meta.updateTag({name: 'description', content: `Un jeu de merde pour les merdes`,});
    this.meta.updateTag({name: 'keywords', content: `vidéos, jouer, fun, jeux vidéo, humour, troll`});
  }
}
