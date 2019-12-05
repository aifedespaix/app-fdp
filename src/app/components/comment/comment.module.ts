import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentFieldComponent} from './comment-field/comment-field.component';
import {CommentComponent} from './comment/comment.component';
import {CommentSystemComponent} from './comment-system/comment-system.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PictureModule} from '../picture/picture.module';
import {CommentModelService} from '../../model/comment/comment-model.service';
import {PipesModule} from '../../pipes/pipes.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    CommentFieldComponent,
    CommentComponent,
    CommentSystemComponent,
  ],
  exports: [
    CommentSystemComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    PictureModule,
    PipesModule,
    MatMenuModule,
  ],
  providers: [
    CommentModelService,
  ],
})
export class CommentModule {
}
