import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ARTICLES} from './gql/queries';
import {Pagination} from '../pagination';
import {ApolloQueryResult} from 'apollo-client';
import {ArticleType} from '../graphql';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public articles(pagination: Pagination): Observable<ArticleType[]> {
    return this.apollo.watchQuery({
      query: ARTICLES,
      variables: pagination,
    })
      .valueChanges
      .pipe(map(
        (res: ApolloQueryResult<{ articles: ArticleType[] }>) => {
          return res.data.articles;
        },
      ));
  }

}
