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
import {PipesModule} from '../../pipes/pipes.module';
import {RouterModule} from '@angular/router';
import {ArticleCardComponent} from './article-card/article-card.component';
import {CardModule} from '../card/card.module';
import {ArticleAdminComponent} from './article-admin/article-admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleCardComponent,
    ArticleAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PictureModule,
    TagModule,
    MatCardModule,
    PipesModule,
    MarkdownModule,
    NgxMarkdownModule.forChild(),
    CardModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  exports: [
    ArticleComponent,
    ArticleListComponent,
    ArticleAdminComponent,
  ],
  providers: [
    ArticleModelService,
  ],
})
export class ArticleModule {
}
