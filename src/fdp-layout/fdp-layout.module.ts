import {NgModule} from '@angular/core';

import {FdpHeaderComponent} from './fdp-layout-header/fdp-layout-header.component';
import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {CommonModule} from "@angular/common";
import {FdpSlidenavComponent} from "./fdp-layout-slidenav/fdp-slidenav.component";
import {RouterModule} from '@angular/router';
import {FdpUserModule} from "../fdp-user/fdp-user.module";

@NgModule({
  declarations: [
    FdpHeaderComponent,
    FdpSlidenavComponent,
  ],
  exports: [
    FdpHeaderComponent,
    FdpSlidenavComponent,
  ],
  imports: [
    CommonModule,
    FdpMaterialModule,
    FdpUserModule,
    RouterModule,
  ],
})
export class FdpLayoutModule {
}
