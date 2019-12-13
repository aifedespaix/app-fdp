import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './article/article.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleModelService} from '../../model/article/article-model.service';
import {PictureModule} from '../picture/picture.module';
import {TagModule} from '../tag/tag.module';
import {MarkdownModule} from '../markdown/markdown.module';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterModule} from '@angular/router';
import {ArticleCardComponent} from './article-card/article-card.component';
import {CardModule} from '../card/card.module';
import {ArticleAdminComponent} from './article-admin/article-admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {PipesModule} from '../../pipes/pipes.module';
import {CommentModule} from '../comment/comment.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ArticleFormComponent } from './article-form/article-form.component';
import {FormsModule} from '@angular/forms';
import {PictureLibraryModule} from '../picture-library/picture-library.module';
import {CategoryModule} from '../category/category.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleCardComponent,
    ArticleAdminComponent,
    ArticleFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MarkdownModule,
    MatTableModule,
    MatCheckboxModule,
    CardModule,
    TagModule,
    PictureModule,
    PipesModule,
    MatButtonModule,
    NgxMarkdownModule.forChild(),
    CommentModule,
    MatIconModule,
    MatTooltipModule,
    FormsModule,
    PictureLibraryModule,
    CategoryModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ArticleComponent,
    ArticleListComponent,
    ArticleAdminComponent,
    ArticleFormComponent,
  ],
  providers: [
    ArticleModelService,
  ],
})
export class ArticleModule {
}
