import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material';

import {BoxRoutingModule} from './box.routing.module';

import {BoxComponent} from './index/box.component';
import {ListComponent} from './list/index/list.component';
import {ImportComponent} from './form/import/import.component';
import {BoxService} from './box.service';
import {ConfirmDeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {MyListComponent} from './list/my-list/my-list.component';
import {EditDialogComponent} from './edit-dialog/edit-dialog.component';

import {SoundService} from '../../commun/sound/sound.service';

import {FileService} from '../../commun/file/file.service';

import {MaterialModule} from '../../commun/material/material.module';
import {ListPipe} from './list/index/list.pipe';
import {ElementComponent} from './element/element.component';
import {FilterComponent} from './filter/filter.component';
import {YoutubeComponent} from './form/youtube/youtube.component';
import {FormDialogComponent} from './form/index/form-dialog.component';
import {CommunModule} from '../../commun/commun.module';
import {TimeService} from '../../commun/time/time.service';
import {DetailComponent} from './detail/detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BoxComponent,
    ConfirmDeleteDialogComponent,
    EditDialogComponent,
    ElementComponent,
    FilterComponent,
    ImportComponent,
    ListComponent,
    ListPipe,
    MyListComponent,
    YoutubeComponent,
    FormDialogComponent,
    DetailComponent,
  ],
  exports: [BoxComponent, MyListComponent, ImportComponent, FilterComponent],
  imports: [
    FormsModule,
    CommunModule,
    RouterModule,
    ReactiveFormsModule,
    MatStepperModule,

    MaterialModule,

    CommunModule,
    BoxRoutingModule,
  ],
  providers: [BoxService, FileService, SoundService, TimeService],
  entryComponents: [FormDialogComponent],
})
export class BoxModule {
}
