import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {ResourceService} from '../../model/resource/resource.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    PipesModule,
  ],
  providers: [
    ResourceService,
  ],
  exports: [
    FileUploadComponent,
  ],
})
export class FileModule {
}
