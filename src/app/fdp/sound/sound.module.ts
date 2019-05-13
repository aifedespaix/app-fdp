import {NgModule} from '@angular/core';
import {SoundComponent} from './sound.component';
import {MatButtonModule, MatIconModule, MatSliderModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ConnectionModule} from '../connection/connection.module';
import {CommonModule} from '@angular/common';
import {SoundImportComponent} from './sound-import/sound-import.component';
import {FileModule} from '../file/file.module';
import {SoundEditComponent} from './sound-edit/sound-edit.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SoundComponent,
    SoundImportComponent,
    SoundEditComponent,
  ],
  exports: [
    SoundComponent,
    SoundImportComponent,
    SoundEditComponent,
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
  ],
  providers: [],
})

export class SoundModule {
}
