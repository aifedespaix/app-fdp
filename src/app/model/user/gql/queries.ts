import gql from 'graphql-tag';

export const MY_PROFILE = gql`
    query myProfile {
        myProfile {
            id
            email
            login
            createdAt
            updatedAt
        }
    }
`;
