import gql from 'graphql-tag';

export const createAudioFileViaYoutubeMutation = gql`
  mutation createAudioFileViaYoutube($youtube: YoutubeInput! $time: TimeInput!) {
    createAudioFileViaYoutube(youtube: $youtube, time: $time) {
      id
      name
      type
      url
      size
      lastModified
    }
  }
`;
