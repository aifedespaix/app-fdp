import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import {RouterModule} from '@angular/router';
import {UserModule} from '../user/user.module';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, MenuButtonComponent, LogoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    UserModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ]
})
export class LayoutModule { }
