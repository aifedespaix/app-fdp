import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import {CategoryModule} from '../../components/category/category.module';
import {FormsModule} from '@angular/forms';
import {ArticleModule} from '../../components/article/article.module';
import {BoxModule} from '../../components/box/box.module';


@NgModule({
  declarations: [AdminIndexComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CategoryModule,
    FormsModule,
    ArticleModule,
    BoxModule,
  ],
})
export class AdminModule { }
