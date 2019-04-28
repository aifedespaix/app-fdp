import gql from 'graphql-tag';

export const register = gql`
  mutation subscribe($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;
