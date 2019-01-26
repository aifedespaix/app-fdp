import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // { path: '',   redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent } todo 404
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'box', component: BoxIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
