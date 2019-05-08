import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './auth/resetPassword/resetPassword.component';

const USER_ROUTES: Routes = [
  {
    path: 'profil',
    component: ProfileComponent,
    data: {
      title: 'Profil',
      description: `Mon profil, mes amis, y'en a plein, tout un gang de tarbas, prêt à foutre le feu !`,
      keyword: `profil, mon profil, informations, détails`
    }
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
    data: { title: 'Changement de mot de passe' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: []
})
export class UserRoutingModule {}
