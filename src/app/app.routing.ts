import { NotFoundComponent } from '../modules/fdp/pages/notFound/notFound.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const FDP_ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Page introuvable' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      FDP_ROUTES,
      { enableTracing: false }
      // {enableTracing: true}  // For debug routing (traces)
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
