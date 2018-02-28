import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpIndexComponent} from './fdp-index.component';

const INDEX_ROUTES: Routes = [
  {
    path: '',
    component: FdpIndexComponent,
    data: {
      title: 'Accueil',
      description: 'Ici c\'est un peu le site de tous les aifedespaix. Du coup t\'as rien à y faire... Casses toi !',
      keyword: 'accueil, aifedespaix'
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(INDEX_ROUTES),
  ],
  exports: [],
})
export class FdpIndexRoutingModule {
}
