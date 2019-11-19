import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {ArticleModelService} from '../../model/article/article-model.service';
import {ArticleModule} from '../../components/article/article.module';
import {DirectivesModule} from '../../directives/directives.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PipesModule} from '../../pipes/pipes.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NewArticleComponent } from './new-article/new-article.component';
import {MarkdownModule} from 'ngx-markdown';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MarkdownEditModule} from '../../components/markdown/markdown-edit.module';

@NgModule({
  declarations: [
    BlogComponent,
    NewArticleComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ArticleModule,
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
    MarkdownEditModule,
  ],
  providers: [
    ArticleModelService,
  ]
})
export class BlogModule { }
