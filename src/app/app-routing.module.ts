import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
    data: {
      icon: 'home',
      name: 'Accueil',
      index: 1,
    },
  },
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule),
    data: {
      icon: 'keyboard',
      name: 'Cours',
      index: 2,
    },
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
    data: {
      icon: 'chrome_reader_mode',
      name: 'Blog',
      index: 3,
    },
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule),
    data: {
      icon: 'audiotrack',
      name: 'Musique',
      index: 4,
    },
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'music', loadChildren: () => import('./pages/music/music.module').then(m => m.MusicModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
