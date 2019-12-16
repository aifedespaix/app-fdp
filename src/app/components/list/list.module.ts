import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGridComponent } from './list-grid/list-grid.component';



@NgModule({
  declarations: [ListGridComponent],
  exports: [
    ListGridComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ListModule { }
