import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    FileUploadComponent
  ],
})
export class FileModule { }
