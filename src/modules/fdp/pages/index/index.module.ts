import { NgModule } from '@angular/core';

import { MaterialModule } from '../../commun/material/material.module';
import { IndexRoutingModule } from './index.routing.module';
import { IndexComponent } from './index.component';
// import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [
    MaterialModule,
    IndexRoutingModule
    // UserModule
  ]
})
export class IndexModule {}
