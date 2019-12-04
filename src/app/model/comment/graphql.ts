import gql from 'graphql-tag';


export const CREATE_BOX_COMMENT = gql`
  mutation createBoxComment($comment: CommentInput!) {
    createBoxComment(comment: $comment) {
      id
      createdAt
      updatedAt
      value
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
  }
`;


export const CREATE_ARTICLE_COMMENT = gql`
  mutation createArticleComment($comment: CommentInput!) {
    createArticleComment(comment: $comment) {
      id
      createdAt
      updatedAt
      value
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
  }
`;
