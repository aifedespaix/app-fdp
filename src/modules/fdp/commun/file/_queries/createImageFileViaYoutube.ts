import gql from 'graphql-tag';

export const createImageFileViaYoutubeMutation = gql`
  mutation createImageFileViaYoutube($youtube: YoutubeInput!) {
    createImageFileViaYoutube(youtube: $youtube) {
      id
      name
      type
      url
      size
      lastModified
    }
  }
`;
