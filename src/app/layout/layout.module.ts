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
import {LogoComponent} from './logo/logo.component';
import {ActionsComponent} from './header/actions/actions.component';
import {ThemeComponent} from './header/actions/theme/theme.component';
import {AuthComponent} from './header/actions/auth/auth.component';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {AuthModule} from '../auth/auth.module';
import {AuthDialogComponent} from '../auth/auth-dialog/auth-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DirectivesModule} from '../directives/directives.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {ThemeStorageService} from './header/actions/theme/theme-storage/theme-storage.service';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import {InlineSVGModule} from 'ng-inline-svg';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LogoComponent,
    ActionsComponent,
    ThemeComponent,
    AuthComponent,
    LayoutFooterComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    MatDialogModule,
    MatTooltipModule,
    MatGridListModule,
    AuthModule,
    DirectivesModule,
    RouterModule,
    InlineSVGModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    LayoutFooterComponent,
  ],
  providers: [
    ThemeStorageService,
  ],
  entryComponents: [
    AuthDialogComponent,
  ]
})
export class LayoutModule {
}
