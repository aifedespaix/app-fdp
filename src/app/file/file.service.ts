import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {File, Upload} from '../graphql.schema';
import {fileUpload} from './gql/file.mutations.gql';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private readonly apollo: Apollo) { }

  public uploadFile(file: Upload) {
    console.log(file);
    const uploadFileSub = this.apollo
      .mutate({
        mutation: fileUpload,
        variables: {data: file},
        context: {
          useMultipart: true
        },
      })
      .subscribe((data: File) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {
        uploadFileSub.unsubscribe();
    });
  }
}
