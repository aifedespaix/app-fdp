import {environment} from '../environments/environment';
import {BoxModule} from '../modules/fdp/pages/box/box.module';

import { isPlatformBrowser } from '@angular/common';
// Angular
import {BrowserModule, BrowserTransferStateModule, TransferState, makeStateKey, Meta, Title} from '@angular/platform-browser';
import {NgModule, PLATFORM_ID, Inject} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {NotFoundComponent} from '../modules/fdp/pages/notFound/notFound.component';

// Apollo
import {ApolloModule, Apollo} from 'apollo-angular';
import {
  HttpLinkModule,
  HttpLink,
  HttpLinkHandler,
} from 'apollo-angular-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

import {ApolloLink} from 'apollo-link';

// FDP
import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {IndexModule} from '../modules/fdp/pages/index/index.module';
import {LayoutModule} from '../modules/fdp/layout/layout.module';
import {VideoModule} from '../modules/fdp/pages/video/video.module';
import {PortfolioModule} from '../modules/fdp/pages/portfolio/portfolio.module';
import {PlaylistModule} from '../modules/fdp/pages/playlist/playlist.module';
import {BlogModule} from '../modules/fdp/pages/blog/blog.module';
import {ShopModule} from '../modules/fdp/pages/shop/shop.module';
import {PageGameModule} from '../modules/fdp/pages/game/game.module';
import { ServiceWorkerModule } from '@angular/service-worker';

const STATE_KEY = makeStateKey<any>('apollo.state');
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'fdp-app',
    }),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserTransferStateModule,

    // Fdp
    BoxModule,
    IndexModule,
    VideoModule,
    PortfolioModule,
    ShopModule,
    PageGameModule,
    LayoutModule,
    PlaylistModule,
    BlogModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [Title, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {
  cache: InMemoryCache;
  http: HttpLinkHandler;
  auth: ApolloLink;

  constructor(
    private readonly apollo: Apollo,
    private readonly transferState: TransferState,
    private readonly httpLink: HttpLink,
    @Inject(PLATFORM_ID) readonly platformId: Object
  ) {
    const isBrowser = isPlatformBrowser(platformId);
    this.cache = new InMemoryCache();
    this.http = httpLink.create({
      uri:
        environment.production
          ? 'https://api.aifedespaix.com/graphql'
          // : 'https://apidev.aifedespaix.com/graphql',
          : 'http://localhost:4201/graphql',
      withCredentials: true,
    });

    this.auth = setContext((_, {headers}) => {
      const token = localStorage.getItem('token');

      return {
        headers: {
          ...headers,
          authorization: token ? `${token}` : '',
        },
      };
    });

    apollo.create({
      link: this.auth.concat(this.http),
      cache: this.cache,
      ...(isBrowser
        ? {
          // queries with `forceFetch` enabled will be delayed
          ssrForceFetchDelay: 200,
        }
        : {
          // avoid to run twice queries with `forceFetch` enabled
          ssrMode: true,
        }),
    });

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onServer() {
    console.log('server');
    console.log(this.http);
    // serializes the cache and puts it under a key
    this.transferState.onSerialize(STATE_KEY, () => this.cache.extract());
  }

  onBrowser() {
    console.log('browser');
    // reads the serialized cache
    const state = this.transferState.get<NormalizedCacheObject>(
      STATE_KEY,
      null,
    );
    // and puts it in the Apollo
    this.cache.restore(state);
  }
}
