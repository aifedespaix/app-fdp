import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {CategoryInput, CategoryType, PaginationInput} from '../_generated/graphql.schema';
import {CATEGORIES, CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY} from './graphql';
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
      .watchQuery({query: CATEGORIES, variables: {pagination}})
      .valueChanges
      .pipe(map(
        ({data}: ApolloQueryResult<{ categories: CategoryType[] }>) => data.categories,
      ));
  }

  public createCategory(category: CategoryInput): Observable<CategoryType> {
    return this.apollo
      .mutate({
        mutation: CREATE_CATEGORY,
        variables: {category},
        update: (store, {data: {createCategory}}: ApolloQueryResult<{ createCategory: CategoryType }>) => {
          const options = {query: CATEGORIES, variables: {pagination: {}}};
          const data = store.readQuery(options) as { categories: CategoryType[] };
          data.categories.push(createCategory);
          store.writeQuery({...options, data});
        },
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ createCategory: CategoryType }>) => data.createCategory,
      ));
  }

  public delete(id: string): Observable<CategoryType> {
    return this.apollo
      .mutate({
          mutation: DELETE_CATEGORY,
          variables: {id},
          update: (store, {data: {deleteCategory}}: ApolloQueryResult<{ deleteCategory: CategoryType }>) => {
            const options = {query: CATEGORIES, variables: {pagination: {}}};
            const data = store.readQuery(options) as { categories: CategoryType[] };
            store.writeQuery({
              ...options,
              data: {categories: data.categories.filter((category) => category.id !== deleteCategory.id)},
            });
          },
        },
      )
      .pipe(map(({data: {deleteCategory}}: ApolloQueryResult<{ deleteCategory: CategoryType }>) => deleteCategory));
  }

}
