import {BrowserModule, BrowserTransferStateModule, makeStateKey, TransferState} from '@angular/platform-browser';
import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LayoutModule} from './layout/layout.module';
import {ResponsiveModule} from './responsive/responsive.module';
import {MarkdownModule} from 'ngx-markdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkHandler, HttpLinkModule} from 'apollo-angular-link-http';
import {CookieService} from 'ngx-cookie-service';
import {setContext} from 'apollo-link-context';
import {isPlatformBrowser} from '@angular/common';

const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    ResponsiveModule,
    LayoutModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    ApolloModule,
    HttpLinkModule,
    BrowserTransferStateModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
  cache: InMemoryCache;
  link: HttpLinkHandler;

  constructor(
    private readonly apollo: Apollo,
    private readonly transferState: TransferState,
    private readonly httpLink: HttpLink,
    private readonly cookieService: CookieService,
    @Inject(PLATFORM_ID) readonly platformId: object,
  ) {
    const isBrowser = isPlatformBrowser(platformId);

    this.cache = new InMemoryCache();
    this.link = this.httpLink.create({
      uri: `${environment.apiEndpoint}`,
      withCredentials: true,
      useMultipart: true,
    });

    apollo.create({
      cache: this.cache,
      ...(isBrowser ? {
        ssrForceFetchDelay: 200000,
      } : {
        ssrMode: true,
      }),
      link: setContext((_, {headers}) => {
        let authorization: string;

        const token = cookieService.get('token');
        authorization = token ? token : '';

        return {
          headers: {
            ...headers,
            authorization,
          },
        };
      }).concat(this.link),
    });

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onServer() {
    this.transferState.onSerialize(STATE_KEY, () => this.cache.extract());
  }

  onBrowser() {
    const state = this.transferState.get<NormalizedCacheObject>(
      STATE_KEY,
      null,
    );
    this.cache.restore(state);
  }

}
