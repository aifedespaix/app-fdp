import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PictureModule} from '../picture/picture.module';
import {PictureLibraryDialogComponent} from './picture-library/picture-library-dialog.component';
import {MatDialogModule, MatIconModule, MatTabsModule} from '@angular/material';
import {PictureLibraryPickComponent} from './picture-library-pick/picture-library-pick.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PictureLibraryService} from './picture-library.service';
import { PictureLibraryPickAndPreviewComponent } from './picture-library-pick-and-preview/picture-library-pick-and-preview.component';

@NgModule({
  declarations: [
    PictureLibraryDialogComponent,
    PictureLibraryPickComponent,
    PictureLibraryPickAndPreviewComponent,
  ],
  imports: [
    CommonModule,
    PictureModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  entryComponents: [
    PictureLibraryDialogComponent,
  ],
  exports: [
    PictureLibraryPickComponent,
    PictureLibraryPickAndPreviewComponent,
  ],
  providers: [
    PictureLibraryService,
  ]
})
export class PictureLibraryModule {
}
