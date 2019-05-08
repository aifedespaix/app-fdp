import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortfolioComponent} from './portfolio.component';

const PORTFOLIO_ROUTES: Routes = [
  {
    path: 'portfolio',
    children: [
      {
        path: '', component: PortfolioComponent,
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
export class PortfolioRoutingModule {
}
