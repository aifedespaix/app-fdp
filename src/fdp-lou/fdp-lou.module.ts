import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpLouRouting} from "./fdp-lou.routing";
import {FdpLouComponent} from "./fdp-lou.component";
import {FdpLouP1Component} from './fdp-lou-p1/fdp-lou-p1.component';
import {FdpLouLooseDialog} from './fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FdpLouComponent,
    FdpLouP1Component,
    FdpLouLooseDialog
  ],
  exports: [
    FdpLouComponent,
  ],
  imports: [
    FormsModule,
    FdpMaterialModule,
    FdpLouRouting,
  ],
  entryComponents: [FdpLouLooseDialog],
})

export class FdpLouModule {}
