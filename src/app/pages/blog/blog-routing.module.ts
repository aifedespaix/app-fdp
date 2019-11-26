import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PendingChangesGuard} from '../../guards/pending-changes.guard';

import {BlogComponent} from './index/blog.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {ArticlePageComponent} from './article/article-page.component';
import {BlogRoutes} from './blog-routes';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: BlogRoutes.Write, component: ArticleFormComponent, canDeactivate: [PendingChangesGuard]},
  {path: 'articles/:id/:title', component: ArticlePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PendingChangesGuard],
})
export class BlogRoutingModule {
}
