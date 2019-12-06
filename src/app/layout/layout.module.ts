import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutHeaderComponent} from './layout-header/layout-header.component';
import {LayoutNavComponent} from './layout-nav/layout-nav.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {LayoutLogoComponent} from './layout-logo/layout-logo.component';
import {ActionsComponent} from './layout-header/layout-header-actions/actions.component';
import {AuthComponent} from './layout-header/layout-header-actions/auth/auth.component';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {AuthModule} from '../auth/auth.module';
import {AuthDialogComponent} from '../auth/auth-dialog/auth-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DirectivesModule} from '../directives/directives.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {ThemeStorageService} from '../components/theme/theme-storage/theme-storage.service';
import {LayoutFooterComponent} from './layout-footer/layout-footer.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {SoundModule} from '../components/sound/sound.module';
import {ThemeModule} from '../components/theme/theme.module';

@NgModule({
  declarations: [
    LayoutHeaderComponent,
    LayoutNavComponent,
    LayoutLogoComponent,
    ActionsComponent,
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
    SoundModule,
    ThemeModule,
  ],
  exports: [
    LayoutHeaderComponent,
    LayoutNavComponent,
    LayoutFooterComponent,
  ],
  providers: [
    ThemeStorageService,
  ],
  entryComponents: [
    AuthDialogComponent,
  ],
})
export class LayoutModule {
}
