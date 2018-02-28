import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FdpUserProfileComponent} from './fdp-user-profile/fdp-user-profile.component';
import {FdpUserAuthResetPasswordComponent} from './fdp-user-auth/fdp-user-auth-resetPassword/fdp-user-auth-resetPassword.component';

const USER_ROUTES: Routes = [
  {
    path: 'profil', component: FdpUserProfileComponent, data: {
      title: 'Profil',
      description: `Mon profil, mes amis, y'en a plein, tout un gang de tarbas, prêt à foutre le feu !`,
      keyword: `profil, mon profil, informations, détails`,
    },
  },
  {path: 'resetPassword', component: FdpUserAuthResetPasswordComponent, data: {title: 'Changement de mot de passe'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(USER_ROUTES),
  ],
  exports: [],
})
export class FdpUserRoutingModule {
}
