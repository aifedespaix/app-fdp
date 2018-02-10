import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const USER_ROUTES: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(USER_ROUTES),
  ],
  exports: [
  ],
})
export class FdpUserRoutingModule {}
