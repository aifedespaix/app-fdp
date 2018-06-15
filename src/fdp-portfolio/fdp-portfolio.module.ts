import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FdpPortfolioRoutingModule } from "./fdp-portfolio.routing.module";
import { FdpPortfolioComponent } from "./fdp-portfolio.component";
import { FdpMaterialModule } from "../fdp-material/fdp-material.module";
import { FdpPortfolioService } from "./fdp-portfolio.service";

@NgModule({
  declarations: [FdpPortfolioComponent],
  exports: [FdpPortfolioComponent],
  imports: [
    FdpMaterialModule,
    FdpPortfolioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FdpPortfolioService]
})
export class FdpPortfolioModule {}
