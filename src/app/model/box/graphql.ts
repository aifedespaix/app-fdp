import gql from 'graphql-tag';

export const BOXES = gql`
    query boxes($pagination: PaginationInput) {
        boxes(pagination: $pagination) {
            id
            createdAt
            updatedAt
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
            author {
                login
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
`;

export const CREATE_BOX = gql`
    mutation createBox($box: BoxInput!) {
      createBox(data: $box) {
        id
        title
      }
    }
`;
