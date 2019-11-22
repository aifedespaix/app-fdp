import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PictureInput, PictureType} from '../_generated/graphql.schema';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {CREATE_PICTURE, MY_PICTURES} from './graphql';

@Injectable()
export class PictureModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public createPicture(picture: PictureInput, file: File): Observable<PictureType> {
    return this.apollo
      .mutate({
        mutation: CREATE_PICTURE,
        variables: {picture, file},
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ createPicture: PictureType }>) => data.createPicture),
      );
  }

  public myPictures(): Observable<PictureType[]> {
    return this.apollo
      .query({
        query: MY_PICTURES,
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ myPictures: PictureType[] }>) => data.myPictures),
      );
  }
}
