import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {FileModule} from '../../components/file/file.module';
import {PictureModule} from '../../components/picture/picture.module';
import {PictureLibraryModule} from '../../components/picture-library/picture-library.module';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FileModule,
    PictureLibraryModule, // todo remove
  ],
})
export class IndexModule { }
