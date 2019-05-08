import {NgModule} from '@angular/core';

import {BlogComponent} from './index/blog.component';
import {ArticleComponent} from './article/article.component';
import {FdpArticleService} from './article/article.service';

import {BlogRoutingModule} from './blog.routing.module';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../commun/material/material.module';
import {ArticleNewComponent} from './article/new/new.component';

@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent,
    ArticleNewComponent,
  ],
  exports: [
    BlogComponent,
  ],
  imports: [
    MaterialModule,
    BlogRoutingModule,
    RouterModule,
  ],
  providers: [
    FdpArticleService,
  ]
})

export class BlogModule {
}
