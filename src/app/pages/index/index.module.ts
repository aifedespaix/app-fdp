import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {FileModule} from '../../components/file/file.module';
import {PictureModule} from '../../components/picture/picture.module';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FileModule,
    PictureModule,
  ],
})
export class IndexModule { }
