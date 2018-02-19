import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {FdpFile} from './fdp-file';

@Injectable()
export class FdpFileService {

  private createFileMutation = gql`
    mutation createFile($name: String! $type: String! $value: String!) {
      createFile(box: {name: $name type: $type value: $value}) {
        id
      }
    }
  `;

  constructor(private apollo: Apollo) {}

  public sendFile(file: FdpFile): Observable<{ success: boolean, error: string }> {
    console.log(file);
    return this.apollo.mutate({
      mutation: this.createFileMutation,
      variables: {
        name: file.name,
        type: file.type,
        value: file.value,
      },
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message}
        }
        if (data && data.register) {
          return {success: true, error: null};
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }
}
