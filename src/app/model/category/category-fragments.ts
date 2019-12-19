import gql from 'graphql-tag';
import {PICTURE_FULL} from '../picture/picture-fragments';

export const CATEGORY_FULL = gql`
  fragment FullCategory on CategoryType {
    id
    name
    description
    picture {...FullPicture}
    updatedAt
    createdAt
  }
  ${PICTURE_FULL}
`;
