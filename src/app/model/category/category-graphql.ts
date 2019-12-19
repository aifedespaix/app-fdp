import gql from 'graphql-tag';
import {CATEGORY_FULL} from './category-fragments';

export const CATEGORY = {
  queries: {
    categories: gql`
      query categories($pagination: PaginationInput) {
        categories(pagination: $pagination) {
          ...FullCategory
        }
      }
      ${CATEGORY_FULL}
    `,
    category: gql`
      query category($id: ID!) {
        category(id: $id) {
          ...FullCategory
        }
      }
      ${CATEGORY_FULL}
    `,
  },
  mutations: {
    deleteCategory: gql`
      mutation deleteCategory($id: ID!) {
        deleteCategory(id: $id) {
          id
        }
      }
    `,
    createCategory: gql`
      mutation createCategory($category: CategoryInput!) {
        createCategory(category: $category) {
          ...FullCategory
        }
      }
      ${CATEGORY_FULL}
    `,
    updateCategory: gql`
      mutation updateCategory($category: CategoryEditInput!) {
        updateCategory(category: $category) {
          ...FullCategory
        }
      }
      ${CATEGORY_FULL}
    `,
  },
};
