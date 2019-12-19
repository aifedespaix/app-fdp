import gql from 'graphql-tag';

export const PICTURE_FULL = gql`
  fragment FullPicture on PictureType {
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
`;
