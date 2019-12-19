import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ARTICLE} from './article-graphql';
import {ApolloQueryResult} from 'apollo-client';
import {ArticleEditInput, ArticleInput, ArticleType, PaginationInput} from '../_generated/graphql.schema';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ArticleModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public articles(pagination: PaginationInput, published = true): Observable<ArticleType[]> {
    return this.apollo
      .watchQuery({
        query: ARTICLE.queries.articles,
        variables: {pagination, published},
      })
      .valueChanges
      .pipe(map(
        ({data: {articles}}: ApolloQueryResult<{ articles: ArticleType[] }>) => articles,
      ));
  }

  public articlesFull(pagination: PaginationInput, published = true): Observable<ArticleType[]> {
    return this.apollo
      .watchQuery({
        query: ARTICLE.queries.articlesFull,
        variables: {pagination, published},
      })
      .valueChanges
      .pipe(map(
        ({data: {articles}}: ApolloQueryResult<{ articles: ArticleType[] }>) => articles,
      ));
  }

  public createArticle(article: ArticleInput): Observable<ArticleType> {
    return this.apollo
      .mutate({
        mutation: ARTICLE.mutations.createArticle,
        variables: {article},
      })
      .pipe(map(
        ({data: {createArticle}}: ApolloQueryResult<{ createArticle: ArticleType }>) => createArticle,
      ));
  }

  public article(id: string): Observable<ArticleType> {
    return this.apollo
      .query({
        query: ARTICLE.queries.article,
        variables: {id},
      })
      .pipe(map(
        ({data: {article}}: ApolloQueryResult<{ article: ArticleType }>) => article,
      ));
  }

  public updateArticle(article: ArticleEditInput) {
    return this.apollo
      .mutate({
        mutation: ARTICLE.mutations.updateArticle,
        variables: {article},
      })
      .pipe(map(
        ({data: {updateArticle}}: ApolloQueryResult<{ updateArticle: ArticleType }>) => updateArticle,
      ));
  }

}
