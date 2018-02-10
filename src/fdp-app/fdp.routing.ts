import {PageNotFoundComponent} from '../fdp-pageNotFound/fdp-pageNotFound.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

const FDP_ROUTES: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, data: {title: 'Page introuvable'}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      FDP_ROUTES,
      {enableTracing: false}  // For debug routing (traces)
      // {enableTracing: true}  // For debug routing (traces)
      ),
  ],
  exports: [RouterModule],
})
export class FdpRoutingModule { }

export const routingComponents = [];
