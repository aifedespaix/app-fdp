import {BrowserModule, BrowserTransferStateModule, makeStateKey, TransferState} from '@angular/platform-browser';
import {Inject, NgModule, PLATFORM_ID} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LayoutModule} from './layout/layout.module';
import {ResponsiveModule} from './responsive/responsive.module';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkHandler, HttpLinkModule} from 'apollo-angular-link-http';
import {setContext} from 'apollo-link-context';
import {isPlatformBrowser} from '@angular/common';
import {SnackService} from './services/snack/snack.service';
import {MatSnackBarModule} from '@angular/material';
import {LocalstorageService} from './services/localstorage/localstorage.service';

const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    AppRoutingModule,
    ResponsiveModule,
    LayoutModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserTransferStateModule,
    MatSnackBarModule,
  ],
  providers: [
    SnackService,
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
    private readonly localstorageService: LocalstorageService,
    @Inject(PLATFORM_ID) readonly platformId: object,
  ) {
    const isBrowser = isPlatformBrowser(platformId);
    this.cache = new InMemoryCache({
      addTypename: true,
      resultCaching: true,
    });
    this.link = this.httpLink.create({
      uri: `${environment.apiEndpoint}`,
      withCredentials: true,
      useMultipart: true,
    });

    apollo.create({
      cache: this.cache,
      ...(isBrowser ? {
        ssrForceFetchDelay: 20000,
      } : {
        ssrMode: true,
      }),
      link: setContext((_, {headers}) => {
        let authorization: string;

        const token = localstorageService.token;
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
