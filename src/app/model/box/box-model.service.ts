import {Injectable} from '@angular/core';
import {AudioInput, BoxInput, BoxType, BoxUpdateInput, PaginationInput} from '../_generated/graphql.schema';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {BOX} from './box-graphql';
import {QueryRef} from 'apollo-angular/QueryRef';

@Injectable()
export class BoxModelService {

  private boxesQuery: QueryRef<{ boxes: BoxType[] }>;
  private canFetchMore: boolean;

  constructor(
    private readonly apollo: Apollo,
  ) {
    this.canFetchMore = true;
  }

  public boxes(pagination: PaginationInput): Observable<BoxType[]> {
    this.boxesQuery = this.apollo
      .watchQuery({
        query: BOX.queries.boxes,
        variables: {pagination},
      });

    return this.boxesQuery
      .valueChanges
      .pipe(map(({data: {boxes}}: ApolloQueryResult<{ boxes: BoxType[] }>) => boxes));
  }

  public moreBoxes(pagination: PaginationInput) {
    if (!this.boxesQuery || !this.canFetchMore) {
      return {boxes: []};
    }
    return this.boxesQuery.fetchMore({
      variables: {pagination},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult || !fetchMoreResult.boxes || !fetchMoreResult.boxes.length) {
          this.canFetchMore = false;
          return prev;
        }
        return Object.assign({}, prev, {
          boxes: [...prev.boxes, ...fetchMoreResult.boxes],
        });
      },
    });
  }

  public createBox(box: BoxInput, sound: AudioInput): Observable<BoxType> {
    return this.apollo
      .mutate({
        mutation: BOX.mutations.createBox,
        variables: {box, sound},
        update: (store, {data: {createBox}}: ApolloQueryResult<{ createBox: BoxType }>) => {
          if (this.boxesQuery) {
            const options = {query: BOX.queries.boxes, variables: {pagination: {first: 20}}};
            const data = store.readQuery(options) as { boxes: BoxType[] };
            data.boxes.push(createBox);
            store.writeQuery({...options, data});
          }
        },
      })
      .pipe(map(({data: {createBox}}: ApolloQueryResult<{ createBox: BoxType }>) => createBox));
  }

  public box(id: string) {
    return this.apollo
      .query({
        query: BOX.queries.box,
        variables: {id},
      })
      .pipe(map(({data: {box}}: ApolloQueryResult<{ box: BoxType }>) => box));
  }

  public update(box: BoxUpdateInput): Observable<BoxType> {
    return this.apollo
      .mutate({
        mutation: BOX.mutations.updateBox,
        variables: {box},
      })
      .pipe(map(({data: {updateBox}}: ApolloQueryResult<{ updateBox: BoxType }>) => updateBox));
  }

  public delete(id: string): Observable<BoxType> {
    return this.apollo
      .mutate({
        mutation: BOX.mutations.deleteBox,
        variables: {id},
      })
      .pipe(map(({data: {deleteBox}}: ApolloQueryResult<{ deleteBox: BoxType }>) => deleteBox));
  }

  public addViewBox(id: string) {
    return this.apollo
      .mutate({
        mutation: BOX.mutations.addViewBox,
        variables: {id},
      })
      .pipe(map(({data: {addViewBox}}: ApolloQueryResult<{ addViewBox: BoxType }>) => addViewBox));
  }
}
