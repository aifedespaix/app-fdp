import gql from 'graphql-tag';

export const loginQuery = gql`
  query login($username: String!, $password: String!) {
    signIn(data: { username: $username, password: $password }) {
      token
    }
  }
`;
