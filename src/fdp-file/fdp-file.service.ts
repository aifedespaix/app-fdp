import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {FdpFile} from './fdp-file';

@Injectable()
export class FdpFileService {
  private createFileMutation = gql`
    mutation createFile($name: String! $type: String! $value: String! $lastModified: Float! $size: Int!) {
      createFile(file: {
        name: $name
        type: $type
        value: $value
        lastModified: $lastModified
        size: $size}) {id}
    }
  `;

  constructor(private apollo: Apollo) {
  }

  public sendFile(file: FdpFile) {
    return this.apollo.mutate({
      mutation: this.createFileMutation,
      variables: {
        name: file.name,
        type: file.type,
        value: file.value,
        lastModified: file.lastModified,
        size: file.size,
      },
      errorPolicy: 'all',
    }).map(
      ({data, errors}: any) => {
        if (errors) {
          return {success: false, error: errors[0].message, fileId: null}
        }
        if (data && data.createFile) {
          return {success: true, error: null, fileId: data.createFile.id};
        }
        return {success: false, error: 'erreur chelou lol', fileId: null};
      },
    );
  }
}
