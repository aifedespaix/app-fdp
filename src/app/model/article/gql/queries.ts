import gql from 'graphql-tag';

export const ARTICLES = gql`
    query articles($skip: Int, $after: Int, $before: Int, $first: Int, $last: Int) {
        articles(skip: $skip after: $after before: $before first: $first last: $last) {
            id
            createdAt
            updatedAt
            title
            content
            thumbnail {
                id
                title
                url
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
