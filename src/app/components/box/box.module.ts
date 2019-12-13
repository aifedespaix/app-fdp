import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoxDetailComponent} from './box-detail/box-detail.component';
import {PictureModule} from '../picture/picture.module';
import {CommentModule} from '../comment/comment.module';
import {MatButtonModule} from '@angular/material/button';
import {BoxModelService} from '../../model/box/box-model.service';
import {BoxFormComponent} from './box-form/box-form.component';
import {PictureLibraryModule} from '../picture-library/picture-library.module';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ResourceModule} from '../resource/resource.module';
import {MatIconModule} from '@angular/material/icon';
import {TagModule} from '../tag/tag.module';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [BoxDetailComponent, BoxFormComponent, BoxComponent],
  exports: [
    BoxDetailComponent,
    BoxFormComponent,
    BoxComponent,
  ],
  imports: [
    CommonModule,
    PictureModule,
    CommentModule,
    MatButtonModule,
    PictureLibraryModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ResourceModule,
    MatIconModule,
    TagModule,
  ],
  providers: [
    BoxModelService,
  ],
})
export class BoxModule {
}
