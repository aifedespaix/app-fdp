import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureComponent} from './picture/picture.component';
import {PictureUploadComponent} from './picture-upload/picture-upload.component';
import {PictureModelService} from '../../model/picture/picture-model.service';
import * as uuid from 'uuid';
import {PictureDialogComponent} from './picture-modale/picture-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatSnackBarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LoadingModule} from '../loading/loading.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PictureComponent,
    PictureUploadComponent,
    PictureDialogComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    LoadingModule,
    PipesModule,
    MatSnackBarModule,
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
    },
  ],
})
export class PictureModule {
}
