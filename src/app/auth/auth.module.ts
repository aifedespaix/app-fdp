import { NgModule } from '@angular/core';
import {AuthDialogComponent} from './auth-dialog/auth-dialog.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {SnackbarModule} from '../components/snackbar/snackbar.module';
import {AuthModelService} from '../model/auth/auth-model.service';
import {UserModelService} from '../model/user/user-model.service';
import {MatDialogModule} from '@angular/material/dialog';
import {DirectivesModule} from '../directives/directives.module';

@NgModule({
  declarations: [
    AuthDialogComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    CommonModule,
    SnackbarModule,
    MatDialogModule,
    DirectivesModule,
  ],
  providers: [
    AuthModelService,
    UserModelService,
  ]
})
export class AuthModule { }
