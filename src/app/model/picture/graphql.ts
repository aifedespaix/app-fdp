import gql from 'graphql-tag';

export const CREATE_PICTURE = gql`
    mutation createPicture($file: Upload!, $picture: PictureInput!) {
        createPicture(file: $file picture: $picture) {
            id
            title
            description
            images {
                id
                url
                width
                height
            }
            createdAt
            updatedAt
        }
    }
`;

export const MY_PICTURES = gql`
    query myPictures {
        myPictures {
            id
            title
            description
            images {
                id
                url
                width
                height
            }
            createdAt
            updatedAt
        }
    }
`;
