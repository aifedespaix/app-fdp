import gql from 'graphql-tag';

export const login = gql`
  query authLogin($data: LoginInput) {
    authLogin(data: $data) {
      token {
        expiresIn
        accessToken
      }
      user {
        id
        createdAt
        updatedAt
        deleted
        email
        name
        #        hpassword
        #        avatar
        #        person
        #        posts
        #        boxes
        #        friends
        level
      }
    }
  }
`;

export const profile = gql`
  query profile {
    authProfile {
      id
      email
      name
    }
  }`;
