import {Injectable} from '@angular/core';
import {AudioInput, BoxInput, BoxType, PaginationInput} from '../_generated/graphql.schema';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {BOX, BOXES, CREATE_BOX} from './graphql';

@Injectable()
export class BoxModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public boxes(pagination: PaginationInput): Observable<BoxType[]> {
    return this.apollo
      .watchQuery({
        query: BOXES,
        variables: {pagination},
      })
      .valueChanges
      .pipe(map(({data}: ApolloQueryResult<{ boxes: BoxType[] }>) => data.boxes));
  }

  public createBox(box: BoxInput, sound: AudioInput): Observable<BoxType> {
    return this.apollo
      .mutate({
        mutation: CREATE_BOX,
        variables: {box, sound},
      })
      .pipe(map(({data: {createBox}}: ApolloQueryResult<{ createBox: BoxType }>) => createBox));

  }

  public box(id: string) {
    return this.apollo
      .mutate({
        mutation: BOX,
        variables: {id},
      })
      .pipe(map(({data: {box}}: ApolloQueryResult<{ box: BoxType }>) => box));
  }
}
