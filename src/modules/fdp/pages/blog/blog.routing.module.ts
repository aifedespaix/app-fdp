import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './index/blog.component';
import {ArticleComponent} from './article/article.component';
import {ArticleNewComponent} from './article/new/new.component';

const BLOG_ROUTES: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: '', component: BlogComponent,
      },
      {
        path: 'article',
        children: [
          {path: ':id', component: ArticleComponent, data: {title: 'Article'}},
          {path: 'new', component: ArticleNewComponent, data: {title: 'Nouvel article'}},
        ]
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(BLOG_ROUTES),
  ],
  exports: [],
})
export class BlogRoutingModule {
}
