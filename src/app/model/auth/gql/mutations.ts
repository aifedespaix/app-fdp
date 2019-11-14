import gql from 'graphql-tag';

export const REGISTER = gql`
    mutation register($login: String!, $email: String!, $password: String!) {
        register(data: {
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
            }
        }
    }
`;
export const LOGIN = gql`
    mutation login($login: String!, $password: String!) {
        login(login: { 
            login: $login
            password: $password
        }) {
            token
            user {
                id
                email
                login
                createdAt
            }
        }
    }
`;
