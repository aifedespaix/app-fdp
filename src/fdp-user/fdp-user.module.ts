import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {FdpMaterialModule} from '../fdp-material/fdp-material.module';
import {FdpUserLoginComponent} from './fdp-user-auth/fdp-user-auth-login/fdp-user-auth-login.component';
import {FdpUserRoutingModule} from './fdp-user.routing.module';
import {FdpUserAuthService} from './fdp-user-auth/fdp-user-auth.service';
import {FdpUserAuthRegisterComponent} from './fdp-user-auth/fdp-user-auth-register/fdp-user-auth-register.component';
import {FdpUserAuthComponent} from './fdp-user-auth/fdp-user-auth.component';

@NgModule({
  declarations: [
    FdpUserLoginComponent,
    FdpUserAuthRegisterComponent,
    FdpUserAuthComponent,
  ],
  exports: [
    FdpUserAuthComponent,
  ],
  imports: [
    FdpMaterialModule,
    FdpUserRoutingModule,
    FormsModule,
  ],
  providers: [
    FdpUserAuthService,
  ]
})

export class FdpUserModule {
}
