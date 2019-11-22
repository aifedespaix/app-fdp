import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureModule} from '../picture/picture.module';
import {PictureLibraryDialogComponent} from './picture-library/picture-library-dialog.component';
import {MatIconModule, MatTabsModule} from '@angular/material';
import {PictureLibraryPickComponent} from './picture-library-pick/picture-library-pick.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PictureLibraryService} from './picture-library.service';

@NgModule({
  declarations: [
    PictureLibraryDialogComponent,
    PictureLibraryPickComponent,
  ],
  imports: [
    CommonModule,
    PictureModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  entryComponents: [
    PictureLibraryDialogComponent,
  ],
  exports: [
    PictureLibraryPickComponent,
  ],
  providers: [
    PictureLibraryService,
  ]
})
export class PictureLibraryModule {
}