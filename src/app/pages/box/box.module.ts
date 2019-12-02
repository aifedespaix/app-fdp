import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BoxRoutingModule} from './box-routing.module';
import {BoxComponent} from './box.component';
import {BoxModelService} from '../../model/box/box-model.service';
import {LoadingModule} from '../../components/loading/loading.module';
import {CardModule} from '../../components/card/card.module';
import {PictureModule} from '../../components/picture/picture.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BtnModule} from '../../components/btn/btn.module';
import {BoxCreateComponent} from './box-create/box-create.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ResourceModule} from '../../components/resource/resource.module';


@NgModule({
  declarations: [BoxComponent, BoxCreateComponent],
  imports: [
    CommonModule,
    BoxRoutingModule,
    LoadingModule,
    CardModule,
    PictureModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    BtnModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ResourceModule,
  ],
  providers: [
    BoxModelService,
  ],
})
export class BoxModule {
}
