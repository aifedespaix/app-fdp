import gql from 'graphql-tag';

export const CREATE_RESOURCE_AUDIO = gql`
    mutation createResourceAudio($resource: ResourceAudioInput!) {
        createResourceAudio(resource: $resource) {
            id
            createdAt
            updatedAt
            title
            description
            url
        }
    }
`;
