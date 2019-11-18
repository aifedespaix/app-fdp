import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import {NewArticleComponent} from './new-article/new-article.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'new', component: NewArticleComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
