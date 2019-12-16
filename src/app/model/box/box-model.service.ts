import {Injectable} from '@angular/core';
import {AudioInput, BoxInput, BoxType, PaginationInput} from '../_generated/graphql.schema';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {BOX, BOXES, CREATE_BOX} from './graphql';
import {QueryRef} from 'apollo-angular/QueryRef';

@Injectable()
export class BoxModelService {

  private boxesQuery: QueryRef<{ boxes: BoxType[] }>;

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public boxes(pagination: PaginationInput): Observable<BoxType[]> {
    this.boxesQuery = this.apollo
      .watchQuery({
        query: BOXES,
        variables: {pagination},
      });

    return this.boxesQuery
      .valueChanges
      .pipe(map(({data: {boxes}}: ApolloQueryResult<{ boxes: BoxType[] }>) => boxes));
  }

  public async moreBoxes(pagination: PaginationInput) {
    if (this.boxesQuery) {
      await this.boxesQuery.fetchMore({
        variables: {pagination},
        updateQuery: (prev, {fetchMoreResult}) => {
          if (!fetchMoreResult) {
            return prev;
          }
          return Object.assign({}, prev, {
            feed: [...prev.boxes, ...fetchMoreResult.boxes],
          });
        },
      });
    }

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
