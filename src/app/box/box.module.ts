import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxIndexComponent} from './box-index/box-index.component';
import {BoxRoutingModule} from './box.routing.module';
import {FileModule} from '../file/file.module';
import {BoxDialogComponent} from './box-dialog/box-dialog.component';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatStepperModule, MatTabsModule} from '@angular/material';
import {BoxService} from './box.service';
import {BoxSoundComponent} from './box-sound/box-sound.component';
import {SoundModule} from '../sound/sound.module';
import {SoundService} from '../sound/sound.service';

@NgModule({
  declarations: [BoxIndexComponent, BoxDialogComponent, BoxSoundComponent],
  imports: [
    CommonModule,
    SoundModule,
    BoxRoutingModule,
    FileModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
  ],
  entryComponents: [
   BoxDialogComponent,
  ],
  providers: [BoxService, SoundService],
})
export class BoxModule { }
