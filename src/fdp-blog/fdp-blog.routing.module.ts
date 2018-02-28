import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpBlogComponent} from './fdp-blog.component';
import {FdpBlogArticleComponent} from './fdp-blog-article/fdp-blog-article.component';

const BLOG_ROUTES: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: '', component: FdpBlogComponent, data: {
          title: 'Blog',
          description: `Car tout le monde a le droit d'écrire de la merde, car tout est faux sur cette planète. Viens déposer ta merde et lis moi tout ça !`,
          keyword: `blog, articles, fun, geek, jeux vidéos`,
        },
      },
      {path: 'article/:id', component: FdpBlogArticleComponent, data: {title: 'Article'}},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(BLOG_ROUTES),
  ],
  exports: [],
})
export class FdpBlogRoutingModule {
}
