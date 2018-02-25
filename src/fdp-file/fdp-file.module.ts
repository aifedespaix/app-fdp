import {NgModule} from '@angular/core';
import {FdpFileService} from './fdp-file.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FdpFileComponent} from './fdp-file.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    FdpFileComponent,
  ],
  exports: [
    FdpFileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    FdpFileService,
  ]
})

export class FdpFileModule {}
