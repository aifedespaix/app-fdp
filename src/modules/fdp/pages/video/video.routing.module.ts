import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageVideoComponent} from './index/video.component';

const VIDEO_ROUTES: Routes = [
  {
    path: 'video', component: PageVideoComponent, data: {
      title: 'Vidéo',
      description: `Les vidéos des aifedespaix, y'en a plein, c'est drôle, c'est cool, c'est fun. Le vrai style Bro'`,
      keyword: `vidéos, jouer, fun, jeux vidéo, humour, troll`,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(VIDEO_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class VideoRoutingModule {
}
