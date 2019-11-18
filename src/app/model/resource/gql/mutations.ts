import gql from 'graphql-tag';

export const CREATE_RESOURCE = gql`
    mutation createResource($title: String!, $description: String!, $file: Upload!) {
        createResource(
            resource: {
                title: $title
                description: $description
            }
            file: $file
        ) {
            id
            createdAt
            updatedAt
            title
            description
            url
        }
    }
`;
