import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {ArticleModelService} from '../../model/article/article-model.service';
import {DirectivesModule} from '../../directives/directives.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PipesModule} from '../../pipes/pipes.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ArticleFormComponent} from './article-form/article-form.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MarkdownModule} from '../../components/markdown/markdown.module';
import {PictureModule} from '../../components/picture/picture.module';
import {MatChipsModule} from '@angular/material';
import {TagModule} from '../../components/tag/tag.module';
import {ArticleComponent} from './article/article.component';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';
import {ArticleListComponent} from './article-list/article-list.component';
import {PictureLibraryModule} from '../../components/picture-library/picture-library.module';

@NgModule({
  declarations: [
    BlogComponent,
    ArticleFormComponent,
    ArticleComponent,
    ArticleListComponent,
  ],
  imports: [
    MarkdownModule,
    NgxMarkdownModule.forChild(),
    CommonModule,
    BlogRoutingModule,
    DirectivesModule,
    MatButtonModule,
    MatCardModule,
    PipesModule,
    MatIconModule,
    MatTooltipModule,
    MarkdownModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MarkdownModule,
    PictureModule,
    MatChipsModule,
    TagModule,
    PictureLibraryModule,
  ],
  providers: [
    ArticleModelService,
  ],
})
export class BlogModule {
}
