import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthDialogComponent} from './auth-dialog/auth-dialog.component';
import {AuthButtonComponent} from './auth-button/auth-button.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FdpModule} from '../fdp/fdp.module';
import {FdpSnackbarComponent} from '../fdp/fdp-snackbar/fdp-snackbar.component';

@NgModule({
  declarations: [LoginComponent, AuthDialogComponent, AuthButtonComponent, RegisterComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    MatTooltipModule,
    MatSnackBarModule,
    FdpModule,
  ],
  exports: [
    AuthButtonComponent
  ],
  entryComponents: [
    AuthDialogComponent,
    FdpSnackbarComponent
  ]
})
export class UserModule {
}
