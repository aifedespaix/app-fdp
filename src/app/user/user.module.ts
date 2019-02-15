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
  MatMenuModule,
  MatTabsModule,
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

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
    BrowserModule
  ],
  exports: [
    AuthButtonComponent
  ],
  entryComponents: [
    AuthDialogComponent
  ]
})
export class UserModule {
}
