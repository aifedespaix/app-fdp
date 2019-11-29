import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourceSoundUploadComponent} from './resource-sound-upload/resource-sound-upload.component';
import {ResourceModelService} from '../../model/resource/resource-model.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {PipesModule} from '../../pipes/pipes.module';
import {SoundModule} from '../sound/sound.module';

@NgModule({
  declarations: [
    ResourceSoundUploadComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    PipesModule,
    SoundModule,
  ],
  providers: [
    ResourceModelService,
  ],
  exports: [
    ResourceSoundUploadComponent,
  ],
})
export class ResourceModule {
}
