import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {CategoryInput, CategoryType, PaginationInput} from '../_generated/graphql.schema';
import {CATEGORY} from './category-graphql';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {CategoryEditInput} from '@aifedespaix/fdp-api-models';

@Injectable()
export class CategoryModelService {

  constructor(
    private readonly apollo: Apollo,
  ) {
  }

  public category(id: string): Observable<CategoryType> {
    return this.apollo
      .query({
        query: CATEGORY.queries.category,
        variables: id,
      })
      .pipe(map(
        ({data}: ApolloQueryResult<{ category: CategoryType }>) => data.category,
      ));
  }

  public categories(pagination: PaginationInput): Observable<CategoryType[]> {
    return this.apollo
      .watchQuery({query: CATEGORY.queries.categories, variables: {pagination}})
      .valueChanges
      .pipe(map(
        ({data}: ApolloQueryResult<{ categories: CategoryType[] }>) => data.categories,
      ));
  }

  public createCategory(category: CategoryInput): Observable<CategoryType> {
    return this.apollo
      .mutate({
        mutation: CATEGORY.mutations.createCategory,
        variables: {category},
        update: (store, {data: {createCategory}}: ApolloQueryResult<{ createCategory: CategoryType }>) => {
          const options = {query: CATEGORY.queries.categories, variables: {pagination: {}}};
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
          mutation: CATEGORY.mutations.deleteCategory,
          variables: {id},
          update: (store, {data: {deleteCategory}}: ApolloQueryResult<{ deleteCategory: CategoryType }>) => {
            const options = {query: CATEGORY.queries.categories, variables: {pagination: {}}};
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

  update(category: CategoryEditInput) {
    return this.apollo
      .mutate({
        mutation: CATEGORY.mutations.updateCategory,
        variables: {category},
        update: (store, {data: {updateCategory}}: ApolloQueryResult<{ updateCategory: CategoryType }>) => {
          const options = {query: CATEGORY.queries.categories, variables: {pagination: {}}};
          const data = store.readQuery(options) as { categories: CategoryType[] };
          data.categories.push(updateCategory);
          store.writeQuery({...options, data});
        },
      })
      .pipe(map(
        ({data: {updateCategory}}: ApolloQueryResult<{ updateCategory: CategoryType }>) => updateCategory,
      ));
  }
}
