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


@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ArticleModule,
    DirectivesModule,
    MatButtonModule,
    MatCardModule,
    PipesModule,
  ],
  providers: [
    ArticleModelService,
  ]
})
export class BlogModule { }
