import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopIndexComponent } from './shop-index/shop-index.component';

const routes: Routes = [{ path: '', component: ShopIndexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
