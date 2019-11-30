import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './index/blog.component';
import {DirectivesModule} from '../../directives/directives.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MarkdownModule} from '../../components/markdown/markdown.module';
import {MatChipsModule} from '@angular/material';
import {TagModule} from '../../components/tag/tag.module';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';
import {PictureLibraryModule} from '../../components/picture-library/picture-library.module';
import {LoadingModule} from '../../components/loading/loading.module';
import {ArticleModule} from '../../components/article/article.module';
import {BlogArticleComponent} from './blog-article/blog-article.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {AuthModule} from '../../auth/auth.module';
import {BtnModule} from '../../components/btn/btn.module';
import {CategoryModule} from '../../components/category/category.module';
import {CategoryModelService} from '../../model/category/category-model.service';

@NgModule({
  declarations: [
    BlogComponent,
    BlogArticleComponent,
    ArticleFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    BlogRoutingModule,
    DirectivesModule,
    PictureLibraryModule,
    TagModule,
    LoadingModule,
    ArticleModule,
    AuthModule,
    MarkdownModule,
    NgxMarkdownModule.forChild(),
    BtnModule,
    CategoryModule,
  ],
})
export class BlogModule {
}
