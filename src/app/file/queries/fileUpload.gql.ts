import gql from 'graphql-tag';

export const fileUploadGql = gql`
  mutation ressourceUpload(
    $data: ResourceCreateInput
  ) {
    fileUpload(data: $data) {
      id
    }
  }
`;
