import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpUserProfileComponent} from './fdp-user-profile/fdp-user-profile.component';

const USER_ROUTES: Routes = [
  {path: 'profil', component: FdpUserProfileComponent, data: {title: 'Profil'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(USER_ROUTES),
  ],
  exports: [
  ],
})
export class FdpUserRoutingModule {}
