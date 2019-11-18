import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LayoutModule} from './layout/layout.module';
import {ResponsiveModule} from './responsive/responsive.module';
import {GraphQLModule} from './graphql/graphql.module';
import { MarkdownModule } from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    GraphQLModule,
    AppRoutingModule,
    ResponsiveModule,
    LayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    GraphQLModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
