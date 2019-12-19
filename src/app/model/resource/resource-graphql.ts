import gql from 'graphql-tag';
import {RESOURCE_FULL} from './resource-fragment';

export const RESOURCE = {
  mutations: {
    createResourceAudio: gql`
      mutation createResourceAudio($audio: AudioInput) {
        createResourceAudio(audio: $audio) {...FullResource}
      }
      ${RESOURCE_FULL}
    `,
  },
};
