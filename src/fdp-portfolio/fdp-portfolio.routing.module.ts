import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpPortfolioComponent} from './fdp-portfolio.component';

const PORTFOLIO_ROUTES: Routes = [
  {
    path: 'portfolio',
    children: [
      {
        path: '', component: FdpPortfolioComponent, data: {
          title: 'Portfolio',
          description: `Portfolio - Parcours et Créations`,
          keyword: `portfolio, site web, mobile, développement`,
        },
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
export class FdpPortfolioRoutingModule {
}
