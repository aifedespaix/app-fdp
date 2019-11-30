import gql from 'graphql-tag';

export const MY_PROFILE = gql`
    query myProfile {
        myProfile {
            id
            email
            login
            createdAt
            updatedAt
            role
            avatar {
                id
                title
                description
                images {
                    id
                    url
                    width
                    height
                }
                updatedAt
                createdAt
            }
        }
    }
`;

export const MY_PROFILE_FULL = gql`
    query myProfile {
        myProfile {
            id
            email
            login
            createdAt
            updatedAt
            avatar {
                id
                title
                description
                images {
                    id
                    url
                    width
                    height
                }
                updatedAt
                createdAt
            }
            articles {
                id
                createdAt
                updatedAt
                published
                title
                description
                thumbnail {
                    id
                    title
                    images {
                        url
                        height
                        width
                        id
                    }
                    description
                }
                likes {
                    id
                    value
                }
                tags {
                    id
                    value
                }
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
                title
                description
                images {
                    id
                    url
                    width
                    height
                }
                updatedAt
                createdAt
            }
        }
    }
`;
