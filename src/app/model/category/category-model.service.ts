import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {CategoryInput, CategoryType, PaginationInput} from '../_generated/graphql.schema';
import {CATEGORIES, CATEGORY, CREATE_CATEGORY} from './graphql';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';

@Injectable()
export class CategoryModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public category(id: string): Observable<CategoryType> {
    return this.apollo
      .query({
        query: CATEGORY,
        variables: id,
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ category: CategoryType }>) => data.category,
      ));
  }

  public categories(pagination: PaginationInput): Observable<CategoryType[]> {
    return this.apollo
      .query({
        query: CATEGORIES,
        variables: pagination,
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ category: CategoryType[] }>) => data.category,
      ));
  }

  public createCategory(category: CategoryInput): Observable<CategoryType> {
    return this.apollo
      .mutate({
        mutation: CREATE_CATEGORY,
        variables: {category},
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ createCategory: CategoryType }>) => data.createCategory,
      ));
  }
}
