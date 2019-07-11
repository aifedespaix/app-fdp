import {NgModule} from '@angular/core';
import {SoundComponent} from './sound.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnectionModule} from '../connection/connection.module';
import {CommonModule} from '@angular/common';
import {SoundImportComponent} from './sound-import/sound-import.component';
import {FileModule} from '../file/file.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SoundWaveComponent} from './sound-wave/sound-wave.component';
import {SoundImportYoutubeComponent} from './sound-import-youtube/sound-import-youtube.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    SoundComponent,
    SoundImportComponent,
    SoundImportYoutubeComponent,
    SoundWaveComponent,
  ],
  exports: [
    SoundComponent,
    SoundImportComponent,
    SoundImportYoutubeComponent,
    SoundWaveComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ConnectionModule,
    DragDropModule,
    FileModule,

    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
})

export class SoundModule {
}
