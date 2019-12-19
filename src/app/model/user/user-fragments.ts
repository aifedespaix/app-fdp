import gql from 'graphql-tag';
import {PICTURE_FULL} from '../picture/picture-fragments';

export const USER_SHOW = gql`
  fragment PublicUser on UserType {
    id
    email
    login
    createdAt
    updatedAt
    role
    avatar {...FullPicture}
  }
  ${PICTURE_FULL}
`;
