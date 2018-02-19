import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FdpBoxService {

  // private createBoxMutation = gql`
  //   mutation createBoxMutation($miniature: String!) {
  //     createBox(box: {title: "test" sound: "test" miniature: $miniature}) {
  //       id
  //     }
  //   }
  // `;

  constructor(private apollo: Apollo) {}

  // public sendFile(file: string): Observable<{ success: boolean, error: string }> {
  //   console.log(miniature);
  //   return this.apollo.mutate({
  //     mutation: this.createBoxMutation,
  //     variables: {
  //       miniature,
  //     },
  //     errorPolicy: 'all',
  //   }).map(
  //     ({data, errors}: any) => {
  //       if (errors) {
  //         return {success: false, error: errors[0].message}
  //       }
  //       if (data && data.register) {
  //         return {success: true, error: null};
  //       }
  //       return {success: false, error: 'erreur chelou lol'};
  //     },
  //   );
  // }
}
