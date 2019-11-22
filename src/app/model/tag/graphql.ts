import gql from 'graphql-tag';

export const TAGS = gql`
    query tags($skip: Int, $after: Int, $before: Int, $first: Int, $last: Int) {
        tags(skip: $skip after: $after before: $before first: $first last: $last) {
            id
            value
        }
    }
`;
