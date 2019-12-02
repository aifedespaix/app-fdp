import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ARTICLE, ARTICLES, CREATE_ARTICLE, UPDATE_ARTICLE} from './graphql';
import {Pagination} from '../pagination';
import {ApolloQueryResult} from 'apollo-client';
import {ArticleEditInput, ArticleInput, ArticleType} from '../_generated/graphql.schema';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public articles(pagination: Pagination, published = true): Observable<ArticleType[]> {
    return this.apollo.watchQuery({
      query: ARTICLES,
      variables: {pagination, published},
    })
      .valueChanges
      .pipe(map(
        (res: ApolloQueryResult<{ articles: ArticleType[] }>) => {
          return res.data.articles;
        },
      ));
  }

  public createArticle(article: ArticleInput): Observable<ArticleType> {
    return this.apollo
      .mutate({
        mutation: CREATE_ARTICLE,
        variables: {article},
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ createArticle: ArticleType }>) => data.createArticle,
      ));
  }

  public article(id: string): Observable<ArticleType> {
    return this.apollo
      .query({
        query: ARTICLE,
        variables: {id},
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ article: ArticleType }>) => data.article,
      ));
  }

  public updateArticle(article: ArticleEditInput) {
    return this.apollo
      .mutate({
        mutation: UPDATE_ARTICLE,
        variables: {article},
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ updateArticle: ArticleType }>) => data.updateArticle,
      ));
  }

}
