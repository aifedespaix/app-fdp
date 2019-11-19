import gql from 'graphql-tag';

export const REGISTER = gql`
    mutation register($login: String!, $email: String!, $password: String!) {
        authRegister(data: {
            login: $login
            email: $email
            password: $password
        }) {
            token
            user {
                id
                email
                login
                role
                createdAt
                avatar {
                    id
                    title
                    url
                }
            }
        }
    }
`;
export const LOGIN = gql`
    mutation login($login: String!, $password: String!) {
      authLogin(login: {
            login: $login
            password: $password
        }) {
            token
            user {
                id
                email
                login
                createdAt
                avatar {
                    id
                    title
                    url
                }
            }
        }
    }
`;
