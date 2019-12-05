import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeComponent} from './theme.component';
import {MatButtonModule} from '@angular/material/button';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ThemeComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    _MatMenuDirectivesModule,
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
  ],
  exports: [
    ThemeComponent,
  ],
})
export class ThemeModule {
}
