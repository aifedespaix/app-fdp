import {Injectable} from '@angular/core';
import {Pagination} from '../pagination';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {TagType} from '../graphql.schema';
import {TAGS} from './queries';
import {Observable} from 'rxjs';

@Injectable()
export class TagModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }


  public tags(pagination: Pagination): Observable<string[]> {
    return this.apollo.query({
      query: TAGS,
      variables: pagination,
    })
      .pipe(map(
        ({data}: ApolloQueryResult<{ tags: TagType[] }>) => data.tags.map((t) => t.value)
      ));
  }

}
