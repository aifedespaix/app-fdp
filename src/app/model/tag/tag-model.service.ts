import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {PaginationInput, TagType} from '../_generated/graphql.schema';
import {TAGS} from './graphql';
import {Observable} from 'rxjs';

@Injectable()
export class TagModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }


  public tags(pagination: PaginationInput): Observable<TagType[]> {
    return this.apollo
      .query({
        query: TAGS,
        variables: pagination,
      })
      .pipe(map(
        ({data: {tags}}: ApolloQueryResult<{ tags: TagType[] }>) => tags,
      ));
  }

}
