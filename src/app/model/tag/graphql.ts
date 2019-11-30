import gql from 'graphql-tag';

export const TAGS = gql`
    query tags($pagination: PaginationInput) {
        tags(pagination: $pagination) {
            id
            value
        }
    }
`;
