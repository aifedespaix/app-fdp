import gql from 'graphql-tag';
import {COMMENT_FULL} from './comment-fragments';

export const COMMENT = {
  mutations: {
    createBoxComment:  gql`
      mutation createBoxComment($comment: CommentInput!) {
        createBoxComment(comment: $comment) {...FullComment}
      }
      ${COMMENT_FULL}
    `,
    createArticleComment: gql`
      mutation createArticleComment($comment: CommentInput!) {
        createArticleComment(comment: $comment) {...FullComment}
      }
      ${COMMENT_FULL}
    `,
    deleteComment: gql`
      mutation deleteComment($id: ID!) {
        deleteComment(id: $id) {id}
      }
    `,
    updateComment: gql`
      mutation updateComment($comment: CommentEditInput!) {
        updateComment(comment: $comment) {...FullComment}
      }
      ${COMMENT_FULL}
    `,
  }
};
