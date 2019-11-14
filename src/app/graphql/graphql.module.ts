import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../../environments/environment';
import {setContext} from 'apollo-link-context';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

export function createApollo(httpLink: HttpLink, cookieService: CookieService) {
  return {
    ssrMode: true,
    link: setContext((_, {headers}) => {
      let authorization: string;

      // if (typeof cookieService !== 'undefined') { // todo verif ssr
        const token = cookieService.get('token');
        authorization = token ? token : '';
      // }

      return {
        headers: {
          ...headers,
          authorization,
        },
      };
    }).concat(
      httpLink.create({
          uri: `${environment.apiEndpoint}`,
          withCredentials: true,
        },
      )),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, CookieService],
    },
  ],
})
export class GraphQLModule {
}
