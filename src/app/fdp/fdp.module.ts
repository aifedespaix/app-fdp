import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdpSnackbarComponent } from './fdp-snackbar/fdp-snackbar.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [FdpSnackbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FdpSnackbarComponent,
  ]
})
export class FdpModule { }
