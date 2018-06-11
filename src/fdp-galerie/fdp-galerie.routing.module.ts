import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FdpGalerieComponent } from "./fdp-galerie.component";

const GALERY_ROUTES: Routes = [
  {
    path: "galerie",
    component: FdpGalerieComponent,
    data: { title: "Galerie" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(GALERY_ROUTES)],
  exports: []
})
export class FdpGalerieRoutingModule {}
