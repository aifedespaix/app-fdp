import {NgModule} from '@angular/core';
import {SoundComponent} from './sound.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSliderModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ConnectionModule} from '../connection/connection.module';
import {CommonModule} from '@angular/common';
import {SoundImportComponent} from './sound-import/sound-import.component';
import {FileModule} from '../file/file.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SoundWaveComponent} from './sound-wave/sound-wave.component';

@NgModule({
  declarations: [
    SoundComponent,
    SoundImportComponent,
    SoundWaveComponent,
  ],
  exports: [
    SoundComponent,
    SoundImportComponent,
    SoundWaveComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    ConnectionModule,
    DragDropModule,
    FileModule,

    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatSliderModule,
    MatListModule,
  ],
  providers: [],
})

export class SoundModule {
}
