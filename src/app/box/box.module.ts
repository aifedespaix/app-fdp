import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxIndexComponent} from './box-index/box-index.component';
import {BoxRoutingModule} from './box.routing.module';
import {FileModule} from '../file/file.module';

@NgModule({
  declarations: [BoxIndexComponent],
  imports: [
    CommonModule,
    BoxRoutingModule,
    FileModule,
  ]
})
export class BoxModule { }
