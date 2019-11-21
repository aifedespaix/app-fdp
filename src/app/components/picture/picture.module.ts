import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureComponent} from './picture/picture.component';
import {PictureUploadComponent} from './picture-upload/picture-upload.component';
import {PipesModule} from '../../pipes/pipes.module';
import {PictureModelService} from '../../model/picture/picture-model.service';
import * as uuid from 'uuid';
import { PictureDialogComponent } from './picture-modale/picture-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    PictureComponent,
    PictureUploadComponent,
    PictureDialogComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [
    PictureComponent,
    PictureUploadComponent,
  ],
  providers: [
    PictureModelService,
    {
      provide: 'UUID',
      useValue: uuid,
    }
  ]
})
export class PictureModule {
}
