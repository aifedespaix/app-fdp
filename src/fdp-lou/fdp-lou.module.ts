import {NgModule} from '@angular/core';

import {FdpMaterialModule} from '../fdp-material/fdp-material.module';
import {FdpLouRouting} from './fdp-lou.routing';
import {FdpLouComponent} from './fdp-lou.component';
import {FdpLouP1Component} from './fdp-lou-p1/fdp-lou-p1.component';
import {FdpLouLooseDialog} from './fdp-lou-loose-dialog/fdp-lou-loose.dialog.component';
import {FormsModule} from '@angular/forms';
import {FdpLouP2Component} from './fdp-lou-p2/fdp-lou-p2.component';
import {FdpLouP3Component} from './fdp-lou-p3/fdp-lou-p3.component';
import {FdpLouP4Component} from './fdp-lou-p4/fdp-lou-p4.component';
import {FdpLouP5Component} from './fdp-lou-p5/fdp-lou-p5.component';
import {FdpLouP6Component} from './fdp-lou-p6/fdp-lou-p6.component';
import {FdpLouP7Component} from './fdp-lou-p7/fdp-lou-p7.component';
import {FdpLouP8Component} from './fdp-lou-p8/fdp-lou-p8.component';
import {FdpLouP9Component} from './fdp-lou-p9/fdp-lou-p9.component';
import {FdpLouGgComponent} from './fdp-lou-gg/fdp-lou-gg.component';

@NgModule({
  declarations: [
    FdpLouComponent,
    FdpLouP1Component,
    FdpLouP2Component,
    FdpLouP3Component,
    FdpLouP4Component,
    FdpLouP5Component,
    FdpLouP6Component,
    FdpLouP7Component,
    FdpLouP8Component,
    FdpLouP9Component,
    FdpLouGgComponent,
    FdpLouLooseDialog,
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

export class FdpLouModule {
}
