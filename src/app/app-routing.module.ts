import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
    data: {
      icon: 'home',
      name: 'Accueil',
    },
  },
  {
    path: 'learn',
    loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule),
    data: {
      icon: 'keyboard',
      name: 'Cours',
    },
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule),
    data: {
      icon: 'chrome_reader_mode',
      name: 'Blog',
    },
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
