import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpTagComponent} from './fdp-tag.component';
import {MatChipsModule} from '@angular/material';

@NgModule({
  declarations: [
    FdpTagComponent,
  ],
  exports: [
    FdpTagComponent,
  ],
  imports: [
    FdpMaterialModule,
    MatChipsModule,
  ],
})

export class FdpTagModule {}
