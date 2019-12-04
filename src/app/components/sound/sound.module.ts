import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SoundWaveComponent} from './sound-wave/sound-wave.component';
import {SoundService} from './sound.service';
import {SoundPlayerComponent} from './sound-player/sound-player.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {PipesModule} from '../../pipes/pipes.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    SoundWaveComponent,
    SoundPlayerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    PipesModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [
    SoundPlayerComponent,
    SoundWaveComponent,
  ],
})
export class SoundModule { }
