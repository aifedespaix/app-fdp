import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './shop.component';

const PORTFOLIO_ROUTES: Routes = [
  {
    path: 'shop',
    children: [
      {
        path: '', component: ShopComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(PORTFOLIO_ROUTES),
  ],
  exports: [],
})
export class ShopRoutingModule {
}
