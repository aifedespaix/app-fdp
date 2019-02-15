import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TitleComponent } from './title/title.component';
import {RouterModule} from '@angular/router';
import {UserModule} from '../user/user.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, TitleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    RouterModule,
    MatListModule,
    UserModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
  ]
})
export class LayoutModule { }
