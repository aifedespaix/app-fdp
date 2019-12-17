import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PendingChangesGuard} from '../../guards/pending-changes.guard';

import {BlogIndexComponent} from './blog-index/blog-index.component';
import {BlogArticleFormComponent} from './blog-article-form/blog-article-form.component';
import {BlogArticleComponent} from './blog-article/blog-article.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BlogIndexComponent
  },
  {
    path: 'new',
    component: BlogArticleFormComponent,
    canDeactivate: [PendingChangesGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'articles/edit/:id/:title',
    component: BlogArticleFormComponent,
    canDeactivate: [PendingChangesGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'articles/:id/:title',
    component: BlogArticleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}
