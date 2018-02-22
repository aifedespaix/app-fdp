import {Injectable} from '@angular/core';
import 'rxjs/add/operator/delay';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {FdpFile} from './fdp-file';

@Injectable()
export class FdpFileService {
// todo manque size + date + ...
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


  private imagesTypes = ['image/png'];

  constructor(private apollo: Apollo) {
  }

  public sendFile(file: FdpFile) {
    console.log(typeof file.lastModified);
    // todo remplir l'id et repondre true sinon throw error
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
          return {success: false, error: errors[0].message}
        }
        if (data && data.createFile) {
          return data.createFile.id;
        }
        return {success: false, error: 'erreur chelou lol'};
      },
    );
  }
}
