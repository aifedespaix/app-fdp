// import {NgModule} from '@angular/core';
// import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
// import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
// import {InMemoryCache} from 'apollo-cache-inmemory';
// import {environment} from '../../../environments/environment';
// import {setContext} from 'apollo-link-context';
// import {HttpClientModule} from '@angular/common/http';
//
// export function createApollo(httpLink: HttpLink) {
//   return {
//     // ssrMode: true,
//     link: setContext((_, {headers}) => {
//       let authorization = '';
//
//       if (typeof localStorage !== 'undefined') {
//         const token = localStorage.getItem('token');
//         authorization = token ? token : '';
//       }
//
//       return {
//         headers: {
//           ...headers,
//           authorization,
//         },
//       };
//     }).concat(
//       httpLink.create({
//           uri: `${environment.apiEndpoint}/graphql`,
//           withCredentials: true,
//         },
//       )),
//     cache: new InMemoryCache(),
//   };
// }
//
//
// @NgModule({
//   exports: [ApolloModule, HttpLinkModule, HttpClientModule],
//   providers: [{
//     provide: APOLLO_OPTIONS,
//     useFactory: createApollo,
//     deps: [HttpLink],
//   }],
// })
// export class GraphQLModule {
// }
