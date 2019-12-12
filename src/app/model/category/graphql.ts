import gql from 'graphql-tag';

export const CATEGORIES = gql`
  query categories($pagination: PaginationInput) {
    categories(pagination: $pagination) {
      id
      name
      description
      picture {
        id
        title
        description
        images {
          id
          url
          width
          height
        }
      }
      updatedAt
      createdAt
    }
  }
`;

export const CATEGORY = gql`
  query category($id: ID!) {
    category(id: $id) {
      id
      name
      picture {
        id
        title
        description
        images {
          id
          url
          width
          height
        }
        createdAt
        updatedAt
      }
      description
      updatedAt
      createdAt
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id) {
      id
    }
  }
`;
export const CREATE_CATEGORY = gql`
  mutation createCategory($category: CategoryInput!) {
    createCategory(category: $category) {
      id
      name
      picture {
        id
        title
        description
        images {
          id
          url
          width
          height
        }
        createdAt
        updatedAt
      }
      description
      updatedAt
      createdAt
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($category: CategoryEditInput!) {
    updateCategory(category: $category) {
      id
      name
      picture {
        id
        title
        description
        images {
          id
          url
          width
          height
        }
        createdAt
        updatedAt
      }
      description
      updatedAt
      createdAt
    }
  }
`;
