import {NgModule} from '@angular/core';
import {MarkdownEditComponent} from './markdown-edit/markdown-edit.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [
    MarkdownEditComponent,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
    NgxMarkdownModule.forRoot({}),
  ],
  exports: [
    MarkdownEditComponent,
  ],
})
export class MarkdownModule {
}
