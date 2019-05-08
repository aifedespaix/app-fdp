import gql from 'graphql-tag';

export const register = gql`
  mutation authRegister($data: RegisterInput) {
    authRegister(data: $data) {
      token {
        accessToken
        expiresIn
      }
      user {
        id
      }
    }
  }
`;
