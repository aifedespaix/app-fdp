import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import {PictureModule} from '../picture/picture.module';
import {CommentModule} from '../comment/comment.module';
import {MatButtonModule} from '@angular/material/button';
import {BoxModelService} from '../../model/box/box-model.service';

@NgModule({
  declarations: [BoxDetailComponent],
  exports: [
    BoxDetailComponent,
  ],
  imports: [
    CommonModule,
    PictureModule,
    CommentModule,
    MatButtonModule,
  ],
  providers: [
    BoxModelService,
  ]
})
export class BoxModule { }
