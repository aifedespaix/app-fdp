import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {CategoryModule} from '../../components/category/category.module';
import {FormsModule} from '@angular/forms';
import {ArticleModule} from '../../components/article/article.module';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CategoryModule,
    FormsModule,
    ArticleModule,
  ],
})
export class AdminModule { }
