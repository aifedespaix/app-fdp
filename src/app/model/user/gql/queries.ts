import gql from 'graphql-tag';

export const MY_PROFILE = gql`
    query myProfile {
        myProfile {
            id
            email
            login
            createdAt
            updatedAt
            avatar {
                id
                url
                description
                updatedAt
                createdAt
            }
        }
    }
`;


export const EDIT_MY_USER = gql`
    mutation edi($avatarId: ID) {
        editMyUser(user: {
            avatarId: $avatarId
        }) {
            id
            email
            login
            createdAt
            updatedAt
            avatar {
                id
                url
                description
                updatedAt
                createdAt
            }
        }
    }
`;
