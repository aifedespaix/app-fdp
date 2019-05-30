import gql from 'graphql-tag';

export const fileUpload = gql`
  mutation fileUpload($data: Upload) {
    fileUpload(data: $data) {
      id
      url
      name
      size
    }
  }
`;
