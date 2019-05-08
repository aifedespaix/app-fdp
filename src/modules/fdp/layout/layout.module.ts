import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../commun/material/material.module';
import { UserModule } from '../pages/user/user.module';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {HttpClientModule} from '@angular/common/http';
import {BoxModule} from '../pages/box/box.module';
import {CommunModule} from '../commun/commun.module';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  exports: [HeaderComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, UserModule, RouterModule, CommunModule, HttpClientModule, BoxModule]
})
export class LayoutModule {}
