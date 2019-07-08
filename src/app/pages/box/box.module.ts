import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoxIndexComponent} from './box-index/box-index.component';
import {BoxRoutingModule} from './box.routing.module';
import {FileModule} from '../../fdp/file/file.module';
import {BoxDialogComponent} from './box-dialog/box-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import {BoxService} from './box.service';
import {BoxSoundComponent} from './box-sound/box-sound.component';
import {SoundModule} from '../../fdp/sound/sound.module';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';

@NgModule({
  declarations: [BoxIndexComponent, BoxDialogComponent, BoxSoundComponent, BoxListComponent, BoxDetailComponent],
  imports: [
    CommonModule,
    BoxRoutingModule,

    FileModule,
    SoundModule,

    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  entryComponents: [
   BoxDialogComponent,
  ],
  providers: [BoxService],
})
export class BoxModule { }
