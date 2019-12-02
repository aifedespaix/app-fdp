import gql from 'graphql-tag';

export const CREATE_RESOURCE_AUDIO = gql`
    mutation createResourceAudio($audio: AudioInput) {
        createResourceAudio(audio: $audio) {
            id
            createdAt
            updatedAt
            title
            description
            url
        }
    }
`;
