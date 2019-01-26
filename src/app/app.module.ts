import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {PLATFORM_ID, APP_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {BoxModule} from './box/box.module';
import {MainModule} from './main/main.module';
import { GraphQLModule } from './graphql.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'app-fdp'}),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BoxModule,
    MainModule,
    GraphQLModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false},
    // ),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
