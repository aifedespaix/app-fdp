import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import {ArticleFormComponent} from './article-form/article-form.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'new', component: ArticleFormComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
