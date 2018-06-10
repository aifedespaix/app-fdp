import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
  MatFormFieldModule
} from "@angular/material";

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
    MatFormFieldModule
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
    MatFormFieldModule
  ],
  declarations: []
})
export class FdpMaterialModule {}
