import gql from 'graphql-tag';

export const fileAudioSlice = gql`
  mutation fileAudioSlice($data: FileAudioSliceInput) {
    fileAudioSlice(data: $data) {
      id
      url
      name
      size
    }
  }
`;
