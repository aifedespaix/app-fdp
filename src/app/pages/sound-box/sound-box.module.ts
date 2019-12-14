import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SoundBoxRoutingModule} from './sound-box-routing.module';
import {SoundBoxIndexComponent} from './sound-box-index/sound-box-index.component';
import {BoxModelService} from '../../model/box/box-model.service';
import {LoadingModule} from '../../components/loading/loading.module';
import {CardModule} from '../../components/card/card.module';
import {PictureModule} from '../../components/picture/picture.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BtnModule} from '../../components/btn/btn.module';
import {SoundBoxEditorComponent} from './sound-box-editor/sound-box-editor.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ResourceModule} from '../../components/resource/resource.module';
import {PictureLibraryModule} from '../../components/picture-library/picture-library.module';
import {TagModule} from '../../components/tag/tag.module';
import {BoxModule} from '../../components/box/box.module';
import {SoundModule} from '../../components/sound/sound.module';


@NgModule({
  declarations: [SoundBoxIndexComponent, SoundBoxEditorComponent],
  imports: [
    CommonModule,
    SoundBoxRoutingModule,
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
    PictureLibraryModule,
    TagModule,
    BoxModule,
    SoundModule,
  ],
})
export class SoundBoxModule {
}
