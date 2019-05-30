import {NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {PLATFORM_ID, APP_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material';
import {MainModule} from './main/main.module';
import {GraphQLModule} from './fdp/graphql/graphql.module';
import {FlexLayoutModule} from '@angular/flex-layout';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    pan: { direction: Hammer.DIRECTION_ALL },
    swipe: { direction: Hammer.DIRECTION_VERTICAL },
  };
}

@NgModule({
  providers: [ {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({appId: 'app-fdp'}),
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    GraphQLModule,

    LayoutModule,
    MainModule,
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}

