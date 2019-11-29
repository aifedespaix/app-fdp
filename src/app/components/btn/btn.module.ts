import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BtnAddComponent} from './btn-add/btn-add.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [BtnAddComponent],
  exports: [
    BtnAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
})
export class BtnModule {
}
