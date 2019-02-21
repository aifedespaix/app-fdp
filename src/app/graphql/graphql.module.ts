import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {environment} from '../../environments/environment';
import {setContext} from 'apollo-link-context';

export function createApollo(httpLink: HttpLink) {
  return {
    link: setContext((_, {headers}) => {
      let authorization = '';

      if (typeof localStorage !== 'undefined') {
        const token = localStorage.getItem('token');
        authorization = token ? `Bearer ${token}` : '';
      }

      return {
        headers: {
          ...headers,
          authorization,
        },
      };
    }).concat(
      httpLink.create({
          uri: environment.apiEndpoint,
          withCredentials: true,
        },
      )),
    cache: new InMemoryCache(),
  };
}


@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps: [HttpLink],
  }],
})
export class GraphQLModule {
}
