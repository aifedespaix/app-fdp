import gql from 'graphql-tag';

export const ARTICLES = gql`
    query articles($pagination: PaginationInput, $published: Boolean!) {
        articles(pagination: $pagination published: $published) {
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

export const CREATE_ARTICLE = gql`
    mutation createArticle($article: ArticleInput!) {
        createArticle(article: $article) {
            id
            createdAt
            updatedAt
            title
            content
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

export const UPDATE_ARTICLE = gql`
    mutation updateArticle($article: ArticleEditInput!, $articleId: String!) {
        updateArticle(article: $article articleId: $articleId) {
            id
            createdAt
            updatedAt
            title
            content
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


export const ARTICLE = gql`
    query article($id: String!) {
        article(id: $id) {
            id
            createdAt
            updatedAt
            title
            content
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
