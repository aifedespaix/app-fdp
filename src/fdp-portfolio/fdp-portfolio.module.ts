import {NgModule} from '@angular/core';

import {FdpPortfolioRoutingModule} from './fdp-portfolio.routing.module';
import {FdpPortfolioComponent} from './fdp-portfolio.component';
import {FdpMaterialModule} from '../fdp-material/fdp-material.module';

@NgModule({
  declarations: [
    FdpPortfolioComponent,
  ],
  exports: [
    FdpPortfolioComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpPortfolioRoutingModule,
  ],
})

export class FdpPortfolioModule {}
