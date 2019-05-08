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
import {SnackbarModule} from '../snackbar/snackbar.module';
import {SnackbarComponent} from '../snackbar/snackbar.component';
import {EqualValidator} from './equal-validator.directive';

@NgModule({
  declarations: [LoginComponent, AuthDialogComponent, AuthButtonComponent, RegisterComponent, EqualValidator],
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
    SnackbarModule,
  ],
  exports: [
    AuthButtonComponent
  ],
  entryComponents: [
    AuthDialogComponent,
    SnackbarComponent
  ]
})
export class UserModule {
}
