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
import {FdpBoxConfirmDeleteDialog} from './fdp-box-delete-dialog/fdp-box-delete.dialog.component';
import {FdpBoxMyListComponent} from './fdp-box-my-list/fdp-box-my-list.component';
import {FdpBoxEditDialog} from './fdp-box-edit-dialog/fdp-box-edit.dialog.component';
import {FdpTagModule} from '../fdp-tag/fdp-tag.module';

@NgModule({
  declarations: [
    FdpBoxComponent,
    FdpBoxSoundComponent,
    FdpBoxFormComponent,
    FdpBoxConfirmDeleteDialog,
    FdpBoxEditDialog,
    FdpBoxMyListComponent,
  ],
  exports: [
    FdpBoxComponent,
    FdpBoxMyListComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpFileModule,
    FdpBoxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    FdpTagModule,
  ],
  providers: [
    FdpBoxService,
    FdpFileService,
  ]
})

export class FdpBoxModule {}
