import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BlogComponent} from './blog.component';
import {ArticleFormComponent} from './article-form/article-form.component';
import {BlogRoutes} from './blog-routes';
import {PendingChangesGuard} from '../../guards/pending-changes.guard';

const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: BlogRoutes.Write, component: ArticleFormComponent, canDeactivate: [PendingChangesGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PendingChangesGuard
  ]
})
export class BlogRoutingModule {
}
