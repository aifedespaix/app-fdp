import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {fileUploadGql} from './queries/fileUpload.gql';
import {Resource, ResourceCreateInput} from '../graphql.schema';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private readonly apollo: Apollo) { }

  public uploadFile(data: ResourceCreateInput) {
    const uploadFileSub = this.apollo
      .mutate({
        mutation: fileUploadGql,
        variables: data
      })
      .subscribe((file: Resource) => {
        console.log(file);
      },
      (err) => {
        console.log(err);
      },
      () => {
        uploadFileSub.unsubscribe();
    });
  }
}
