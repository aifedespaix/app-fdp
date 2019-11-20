import gql from 'graphql-tag';

export const CREATE_PICTURE = gql`
    mutation createPicture($file: Upload!, $picture: PictureInput!) {
        createPicture(file: $file picture: $picture) {
            id
            title
            description
            images {
                url
                width
                height
            }
            createdAt
            updatedAt
        }
    }
`;
