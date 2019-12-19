import gql from 'graphql-tag';
import {USER_SHOW} from '../user/user-fragments';

export const COMMENT_FULL = gql`
  fragment FullComment on CommentType {
    id
    createdAt
    updatedAt
    value
    likes {value}
    author {...PublicUser}
  }
  ${USER_SHOW}
`;
