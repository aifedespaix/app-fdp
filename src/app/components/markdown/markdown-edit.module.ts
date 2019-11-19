import { NgModule } from '@angular/core';
import { MarkdownEditComponent } from './markdown/markdown-edit.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MarkdownEditComponent,
  ],
  imports: [
    FormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MarkdownEditComponent,
  ],
})
export class MarkdownEditModule { }
