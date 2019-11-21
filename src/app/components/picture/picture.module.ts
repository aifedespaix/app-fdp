import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureComponent} from './picture/picture.component';
import {PictureUploadComponent} from './picture-upload/picture-upload.component';
import {PipesModule} from '../../pipes/pipes.module';
import {PictureModelService} from '../../model/picture/picture-model.service';


@NgModule({
  declarations: [
    PictureComponent,
    PictureUploadComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
  exports: [
    PictureComponent,
    PictureUploadComponent,
  ],
  providers: [
    PictureModelService,
  ]
})
export class PictureModule {
}
