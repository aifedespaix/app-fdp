import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {ResourceModule} from '../../components/resource/resource.module';
import {CardModule} from '../../components/card/card.module';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ResourceModule,
    CardModule,
  ],
})
export class IndexModule { }
