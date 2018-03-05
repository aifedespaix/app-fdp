import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';

import {FdpMaterialModule} from '../fdp-material/fdp-material.module';
import {FdpUserLoginComponent} from './fdp-user-auth/fdp-user-auth-login/fdp-user-auth-login.component';
import {FdpUserRoutingModule} from './fdp-user.routing.module';
import {FdpUserAuthService} from './fdp-user-auth/fdp-user-auth.service';
import {FdpUserAuthRegisterComponent} from './fdp-user-auth/fdp-user-auth-register/fdp-user-auth-register.component';
import {FdpUserAuthComponent} from './fdp-user-auth/fdp-user-auth.component';
import {FdpUserProfileComponent} from './fdp-user-profile/fdp-user-profile.component';
import {FdpUserAuthResetPasswordComponent} from './fdp-user-auth/fdp-user-auth-resetPassword/fdp-user-auth-resetPassword.component';
import {FdpBoxConfirmDeleteDialog} from '../fdp-box/fdp-box-delete-dialog/fdp-box-delete.dialog.component';
import {FdpBoxModule} from '../fdp-box/fdp-box.module';
import {FdpBoxEditDialog} from '../fdp-box/fdp-box-edit-dialog/fdp-box-edit.dialog.component';

@NgModule({
  declarations: [
    FdpUserLoginComponent,
    FdpUserAuthRegisterComponent,
    FdpUserAuthComponent,
    FdpUserProfileComponent,
    FdpUserAuthResetPasswordComponent,
  ],
  entryComponents: [FdpBoxConfirmDeleteDialog, FdpBoxEditDialog],
  exports: [
    FdpUserAuthComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpUserRoutingModule,
    FdpBoxModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    FdpUserAuthService,
  ],
})

export class FdpUserModule {
}
