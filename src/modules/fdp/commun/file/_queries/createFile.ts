
import gql from 'graphql-tag';

export const createFileMutation = gql`
  mutation createFile(
  $name: String!
  $type: String!
  $value: String!
  $lastModified: Float!
  $size: Int!
  ) {
    createFile(
      file: {
        name: $name
        type: $type
        value: $value
        lastModified: $lastModified
        size: $size
      }
    ) {
      id
      name
      type
      url
      size
      lastModified
    }
  }
`;
