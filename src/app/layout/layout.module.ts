import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LogoComponent } from './logo/logo.component';
import { ActionsComponent } from './header/actions/actions.component';
import { ThemeComponent } from './header/actions/theme/theme.component';
import { AuthComponent } from './header/actions/auth/auth.component';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material';
import {LayoutService} from './layout.service';
import {SeoModule} from '../seo/seo.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
    ActionsComponent,
    ThemeComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatRippleModule,
    SeoModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
  ],
  providers: [
    LayoutService,
  ]
})
export class LayoutModule {
}
