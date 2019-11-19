import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import {MarkdownModule} from 'ngx-markdown';
import {PipesModule} from '../../pipes/pipes.module';



@NgModule({
  declarations: [ArticleComponent],
  exports: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    PipesModule,
  ],
})
export class ArticleModule { }
