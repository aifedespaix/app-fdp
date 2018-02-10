import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FdpBlogComponent} from "./fdp-blog.component";
import {FdpBlogArticleComponent} from "./fdp-blog-article/fdp-blog-article.component";

const BLOG_ROUTES: Routes = [
  {
    path: 'blog',
    children: [
      {path: '', component: FdpBlogComponent, data: {title: 'Blog'}},
      {path: 'article/:id', component: FdpBlogArticleComponent, data: {title: 'Article'}},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(BLOG_ROUTES),
  ],
  exports: [
  ]
})
export class FdpBlogRoutingModule { }
