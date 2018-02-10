import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatIconModule, MatTabsModule, MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
  ],
  declarations: []
})
export class FdpMaterialModule { }
