import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpBoxRoutingModule} from "./fdp-box.routing.module";
import {FdpBoxComponent} from "./fdp-box.component";
import {FdpBoxSoundComponent} from './fdp-box-sound/fdp-box-sound.component';
import {FdpBoxFormComponent} from './fdp-box-form/fdp-box-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FdpBoxComponent,
    FdpBoxSoundComponent,
    FdpBoxFormComponent,
  ],
  exports: [
    FdpBoxComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpBoxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})

export class FdpBoxModule {}
