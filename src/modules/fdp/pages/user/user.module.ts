import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material';

import {LoginComponent} from './auth/login/login.component';
import {UserRoutingModule} from './user.routing.module';
import {AuthService} from './auth/auth.service';
import {RegisterComponent} from './auth/register/register.component';
import {AuthComponent} from './auth/auth.component';
import {ProfileComponent} from './profile/profile.component';
import {ResetPasswordComponent} from './auth/resetPassword/resetPassword.component';
import {ConfirmDeleteDialogComponent} from '../box/delete-dialog/delete-dialog.component';
import {EditDialogComponent} from '../box/edit-dialog/edit-dialog.component';
import {BoxModule} from '../box/box.module';
import {MaterialModule} from '../../commun/material/material.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    ProfileComponent,
    ResetPasswordComponent,
  ],
  entryComponents: [
    ConfirmDeleteDialogComponent,
    EditDialogComponent,
    AuthComponent,
  ],
  exports: [AuthComponent],
  imports: [
    MaterialModule,
    UserRoutingModule,
    BoxModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    AuthService,
  ],
})
export class UserModule {
}
