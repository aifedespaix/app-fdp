import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {ARTICLES, CREATE_ARTICLE} from './graphql';
import {Pagination} from '../pagination';
import {ApolloQueryResult} from 'apollo-client';
import {ArticleInput, ArticleType} from '../_generated/graphql.schema';
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

  public createArticle(article: ArticleType): Observable<ArticleType> {
    const articleInput: ArticleInput = {
      title: article.title,
      description: article.description,
      content: article.content,
      tags: article.tags.map((t) => t.value),
      thumbnailId: article.thumbnail.id,
    };
    return this.apollo
      .mutate({
        mutation: CREATE_ARTICLE,
        variables: {
          article: articleInput,
        },
      })
      .pipe(map(
        (res: ApolloQueryResult<{ createArticle: ArticleType }>) => {
          return res.data.createArticle;
        },
      ));
  }
}
