import gql from 'graphql-tag';

export const fileUploadGql = gql`
  mutation subscribe(
    $data: ResourceCreateInput
  ) {
    fileUpload(data: $data) {
      id
    }
  }
`;
