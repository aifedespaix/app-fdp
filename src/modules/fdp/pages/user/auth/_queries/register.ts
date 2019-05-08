import gql from 'graphql-tag';

export const registerMutation = gql`
  mutation register($email: String!, $username: String!, $password: String!) {
    register(
      data: { username: $username, password: $password, email: $email }
    ) {
      id
    }
  }
`;
