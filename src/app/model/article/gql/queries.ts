import gql from 'graphql-tag';

export const ARTICLES = gql`
    query articlesprod($skip: Int, $after: Int, $before: Int, $first: Int, $last: Int) {
        articles(skip: $skip after: $after before: $before first: $first last: $last) {
            id
            createdAt
            updatedAt
            title
            content
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
