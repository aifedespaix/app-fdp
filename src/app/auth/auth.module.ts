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
import {EqualValidatorDirective} from '../directives/equal-validator.directive';
import {CommonModule} from '@angular/common';
import {SnackbarModule} from '../components/snackbar/snackbar.module';
import {AuthService} from './auth.service';
import {AuthModelService} from '../model/auth/auth.model.service';
import {UserModelService} from '../model/user/user-model.service';

@NgModule({
  declarations: [
    AuthDialogComponent,
    LoginComponent,
    RegisterComponent,
    EqualValidatorDirective,
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
  ],
  providers: [
    AuthService,
    AuthModelService,
    UserModelService,
  ]
})
export class AuthModule { }
