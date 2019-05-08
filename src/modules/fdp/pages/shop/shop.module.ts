import {NgModule} from '@angular/core';

import {MaterialModule} from '../../commun/material/material.module';
import {ShopRoutingModule} from './shop.routing.module';
import {ShopComponent} from './shop.component';

@NgModule({
  declarations: [ShopComponent],
  exports: [ShopComponent],
  imports: [
    MaterialModule,
    ShopRoutingModule
  ],
  providers: [],
})
export class ShopModule {
}
