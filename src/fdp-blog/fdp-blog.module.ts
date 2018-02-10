import {NgModule} from '@angular/core';

import {FdpBlogComponent} from './fdp-blog.component';
import {FdpBlogArticleComponent} from './fdp-blog-article/fdp-blog-article.component';
import {FdpArticleService} from './fdp-blog-article/fdp-blog-article.service';

import {FdpMaterialModule} from '../fdp-material/fdp-material.module';
import {FdpBlogRoutingModule} from './fdp-blog.routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    FdpBlogComponent,
    FdpBlogArticleComponent,
  ],
  exports: [
    FdpBlogComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpBlogRoutingModule,
    RouterModule,
  ],
  providers: [
    FdpArticleService,
  ]
})

export class FdpBlogModule {
}
