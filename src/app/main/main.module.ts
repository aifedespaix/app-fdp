import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {IndexComponent} from './index/index.component';
import {MainRoutingModule} from './main.routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [PageNotFoundComponent, IndexComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    DragDropModule
  ]
})
export class MainModule { }
