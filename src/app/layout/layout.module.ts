import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import {RouterModule} from '@angular/router';
import {UserModule} from '../fdp/user/user.module';
import { LogoComponent } from './logo/logo.component';
import {SoundModule} from '../fdp/sound/sound.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, MenuButtonComponent, LogoComponent],
  imports: [
    CommonModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule,

    UserModule,
    SoundModule,

    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ]
})
export class LayoutModule { }
