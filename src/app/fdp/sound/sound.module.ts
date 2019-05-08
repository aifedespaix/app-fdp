import {NgModule} from '@angular/core';
import {SoundService} from './sound.service';
import {SoundComponent} from './sound.component';
import {MatButtonModule, MatIconModule, MatSliderModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ConnectionModule} from '../connection/connection.module';
import {CommonModule} from '@angular/common';
import {SoundImportComponent} from './sound-import/sound-import.component';
import {FileModule} from '../file/file.module';
import {SoundEditComponent} from './sound-edit/sound-edit.component';

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
    ConnectionModule,
    FileModule,

    FormsModule,

    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatSliderModule,
  ],
  providers: [
  ]
})

export class SoundModule {}
