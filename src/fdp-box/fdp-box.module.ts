import {NgModule} from '@angular/core';

import {FdpMaterialModule} from "../fdp-material/fdp-material.module";
import {FdpBoxRoutingModule} from "./fdp-box.routing.module";
import {FdpBoxComponent} from "./fdp-box.component";
import {FdpBoxSoundComponent} from './fdp-box-sound/fdp-box-sound.component';
import {FdpBoxFormComponent} from './fdp-box-form/fdp-box-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FdpBoxService} from './fdp-box.service';
import {FdpFileService} from '../fdp-file/fdp-file.service';
import {FdpFileModule} from '../fdp-file/fdp-file.module';
import {MatStepperModule} from '@angular/material';
import {FdpBoxConfirmDeleteBoxDialog} from './fdp-box-delete/fdp-box-delete.dialog.component';

@NgModule({
  declarations: [
    FdpBoxComponent,
    FdpBoxSoundComponent,
    FdpBoxFormComponent,
    FdpBoxConfirmDeleteBoxDialog,
  ],
  exports: [
    FdpBoxComponent,
    FdpBoxConfirmDeleteBoxDialog,
  ],
  imports: [
    FdpMaterialModule,
    FdpFileModule,
    FdpBoxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
  ],
  providers: [
    FdpBoxService,
    FdpFileService,
  ]
})

export class FdpBoxModule {}
