import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpBoxComponent} from './fdp-box.component';

const BOX_ROUTES: Routes = [
  {
    path: 'box', component: FdpBoxComponent, data: {
      title: 'Box',
      description: `AifeDesBox : Tu clics, t'écoutes, ça fait du bruit, t'es contents. Poste tes propres Boxs si t'es chaud !`,
      keyword: `box, sound, soundbox, écoute, clic, sons, phrase, drôle, film`,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(BOX_ROUTES),
  ],
  exports: [],
})
export class FdpBoxRoutingModule {
}
