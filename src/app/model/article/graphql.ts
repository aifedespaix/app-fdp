import gql from 'graphql-tag';

export const ARTICLES = gql`
  query articles($pagination: PaginationInput, $published: Boolean!) {
    articles(pagination: $pagination published: $published) {
      id
      createdAt
      updatedAt
      title
      published
      description
      thumbnail {
        id
        title
        images {
          url
          height
          width
          id
        }
        description
      }
      author {
        login
      }
      likes {
        id
        value
      }
      tags {
        id
        value
      }
    }
  }
`;

export const CREATE_ARTICLE = gql`
  mutation createArticle($article: ArticleInput!) {
    createArticle(article: $article) {
      id
      createdAt
      updatedAt
      title
      content
      thumbnail {
        id
        title
        images {
          url
          height
          width
          id
        }
        description
      }
      author {
        login
      }
      likes {
        id
        value
      }
      tags {
        id
        value
      }
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation updateArticle($article: ArticleEditInput!) {
    updateArticle(article: $article) {
      id
      createdAt
      updatedAt
      title
      content
      thumbnail {
        id
        title
        images {
          url
          height
          width
          id
        }
        description
      }
      author {
        login
      }
      likes {
        id
        value
      }
      tags {
        id
        value
      }
    }
  }
`;

export const ARTICLE = gql`
  query article($id: ID!) {
    article(id: $id) {
      id
      createdAt
      updatedAt
      title
      content
      comments {
        id
        value
        createdAt
        updatedAt
        likes {
          value
        }
        author {
          login
          avatar {
            id
            title
            description
            createdAt
            updatedAt
            images {
              id
              url
              width
              height
              mimetype
            }
          }
        }
      }
      thumbnail {
        id
        title
        images {
          url
          height
          width
          id
        }
        description
      }
      author {
        login
      }
      likes {
        id
        value
      }
      tags {
        id
        value
      }
    }
  }
`;
