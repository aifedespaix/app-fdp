import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageGameComponent} from './index/game.component';

const GAME_ROUTES: Routes = [
  {
    path: 'game', component: PageGameComponent, data: {
      title: 'Game',
      description: `Un jeu de merde pour les merdes`,
      keyword: `vidéos, jouer, fun, jeux vidéo, humour, troll`,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(GAME_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class GameRoutingModule {
}
