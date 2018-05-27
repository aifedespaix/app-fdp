import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
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
  MatSnackBarModule,
  MatListModule,
  MatDialogModule,
  MatExpansionModule,
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
    MatSnackBarModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
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
    MatListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule,
  ],
  declarations: [],
})
export class FdpMaterialModule {
}
