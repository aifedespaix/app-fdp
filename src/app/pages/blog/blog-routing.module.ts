import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PendingChangesGuard} from '../../guards/pending-changes.guard';

import {BlogComponent} from './index/blog.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {BlogArticleComponent} from './blog-article/blog-article.component';
import {BlogRoutes} from './blog-routes';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {
    path: BlogRoutes.Write,
    component: ArticleFormComponent,
    canDeactivate: [PendingChangesGuard],
    canActivate: [AuthGuard],
  },
  {path: 'articles/:id/:title', component: BlogArticleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}
