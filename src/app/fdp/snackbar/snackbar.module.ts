import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SnackbarComponent,
  ]
})
export class SnackbarModule { }
