import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatIconModule, MatTabsModule, MatMenuModule, MatCardModule,
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
    MatCardModule,
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
    MatCardModule,
  ],
  declarations: []
})
export class FdpMaterialModule { }
