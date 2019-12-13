import {NgModule} from '@angular/core';
import {ApolloTestingModule} from 'apollo-angular/testing';
import {AuthModule} from '../auth/auth.module';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpLinkModule} from 'apollo-angular-link-http';
import {ResponsiveModule} from '../responsive/responsive.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';
import {CommonModule} from '@angular/common';
import {MatSnackBarModule} from '@angular/material';
import {SnackService} from '../services/snack/snack.service';

@NgModule({
  imports: [
    ApolloTestingModule,
    AuthModule,
    LayoutModule,
    HttpClientModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    ResponsiveModule,
    AppRoutingModule,
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    SnackService,
  ],
})
export class TestsModule {
}
