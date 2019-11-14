import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {ArticleModelService} from '../../model/article/article-model.service';
import {ArticleModule} from '../../components/article/article.module';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ArticleModule,
  ],
  providers: [
    ArticleModelService,
  ]
})
export class BlogModule { }
