import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {FileModule} from '../../components/file/file.module';
import {CardModule} from '../../components/card/card.module';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FileModule,
    CardModule,
  ],
})
export class IndexModule { }
