import {NgModule} from '@angular/core';
import {MarkdownEditComponent} from './markdown-edit/markdown-edit.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';
import {PictureDialogComponent} from '../picture/picture-modale/picture-dialog.component';
import {MatDialogModule} from '@angular/material';
import {PictureLibraryModule} from '../picture-library/picture-library.module';

@NgModule({
  declarations: [
    MarkdownEditComponent,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgxMarkdownModule.forRoot({}),
    MatDialogModule,
    PictureLibraryModule,
  ],
  exports: [
    MarkdownEditComponent,
  ],
  entryComponents: [
    PictureDialogComponent,
  ]
})
export class MarkdownModule {
}
