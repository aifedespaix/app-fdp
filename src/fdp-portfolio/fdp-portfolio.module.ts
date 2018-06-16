import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FdpPortfolioRoutingModule } from "./fdp-portfolio.routing.module";
import { FdpPortfolioComponent } from "./fdp-portfolio.component";
import { FdpMaterialModule } from "../fdp-material/fdp-material.module";
import { FdpPortfolioService } from "./fdp-portfolio.service";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material";

@NgModule({
  declarations: [FdpPortfolioComponent],
  exports: [FdpPortfolioComponent],
  imports: [
    FdpMaterialModule,
    FdpPortfolioRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    FdpPortfolioService
  ]
})
export class FdpPortfolioModule {}
