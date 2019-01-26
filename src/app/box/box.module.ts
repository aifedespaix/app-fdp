import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxIndexComponent} from './box-index/box-index.component';
import {BoxRoutingModule} from './box.routing.module';

@NgModule({
  declarations: [BoxIndexComponent],
  imports: [
    CommonModule,
    BoxRoutingModule,
  ]
})
export class BoxModule { }
