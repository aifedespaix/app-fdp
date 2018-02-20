import {NgModule} from '@angular/core';
import {FdpFileService} from './fdp-file.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FdpFileComponent} from './fdp-file.component';

@NgModule({
  declarations: [
    FdpFileComponent,
  ],
  exports: [
    FdpFileComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FdpFileService,
  ]
})

export class FdpFileModule {}
