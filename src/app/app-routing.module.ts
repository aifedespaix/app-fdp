import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundGuard} from './guards/not-found.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
    data: {
      icon: 'home',
      name: 'Accueil',
      index: 1,
      animation: 'Index',
    },
  },
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule),
    data: {
      icon: 'keyboard',
      name: 'Formation',
      index: 2,
      animation: 'Learn',
    },
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
    data: {
      icon: 'chrome_reader_mode',
      name: 'Blog',
      index: 3,
      animation: 'Blog',
    },
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule),
    data: {
      icon: 'audiotrack',
      name: 'Musique',
      index: 4,
      animation: 'Music',
    },
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'legal',
    loadChildren: () => import('./pages/legal/legal.module').then(m => m.LegalModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
